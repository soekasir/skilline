import { AlertColor } from "@mui/material";
import { makeAutoObservable } from "mobx";
import { Service } from "typedi";


@Service()
export default class AlertService{
  message=""
  type:AlertColor="success"
  open=false;

  constructor(){
    makeAutoObservable(this)
  }

  create(message:string,type:AlertColor="success"){
    this.message=message;
    this.type=type
    this.open=true
  }

  close=(event?: React.SyntheticEvent | Event, reason?: string)=>{
    if (reason === 'clickaway') {
      return;
    }
    this.open=false
  }
}