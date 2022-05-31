import os from "os";
import { Log } from "../util/log";
import { ReadGPIO16 } from "./readgpio16.js";
import config from "../config";

export class SocketHandler {
  constructor(io) {
    this.io = io;
    this.numConnections = 0;
    this.interval = config.socketInterval;
  }
  static _getData(measurementList) {
    ...
  }
  static _emit(socket, dataObject) {
    ...
    socket.emit("data", dataToEmit);
    Log.logInfo(`Emiting data: ${JSON.stringify(dataToEmit)}`);
  }
  static _clearInterval({ intervalId }) {
    ...
  }
  listen() {
    this.io.on("connection", socket => {
      Log.logInfo("Socket connection");
      this.numConnections += 1;
      Log.logInfo(`Number of connections: ${this.numConnections}`);

      socket.intervalId = setInterval(async () => {
        try {
          const measurementList = await ReadGPIO16.read();
          const data = SocketHandler._getData(measurementList);
          
          SocketHandler._emit(socket, data);
        } catch (err) {
          Log.logError(err);
        }
      }, this.interval);

      socket.on("disconnect", () => {
        Log.logInfo("Socket disconnection");
        this.numConnections -= 1;
        Log.logInfo(`Number of connections: ${this.numConnections}`);
        SocketHandler._clearInterval(socket);
        if (this.numConnections === 0) {
          this.close();
        }
      });

      socket.on("error", error => {
        Log.logError(error);
        socket.emit("thing_error", error);
        SocketHandler._clearInterval(socket);
      });
    });
  }
  close() {
    Log.logInfo("Closing all socket connections...");
    Object.keys(this.io.sockets.sockets).forEach(s => {
      const socket = this.io.sockets.sockets[s];
      SocketHandler._clearInterval(socket);
      socket.disconnect(true);
    });
  }
}
