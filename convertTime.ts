/*
You can use this to get a date in spanish format.
It has been compiled and it is working, any ideas welcome.

To use for example first import it:
    import { DateCon} from './convertTime'
Then create an object with the time you like to convert in miliseconds:
    var spanish = new DateCon.dateSpanish(1451775600000);
    
Use getDateFormatNumeric() to get the date in format "dd/mm/yyyy"
Use getDateMonthString() to get the date like "Domingo 3 de Enero de 2016"

That's it for now 

*/
namespace DateCon{
    export class dateSpanish{
        time: number;
        meses: string[];
        dias: string[];
        date: number;
        day: number;
        month: number;
        year: number;
        dayWeek: number;
    
        constructor(time: number){
            this.time = time;
            this.loadData();
            this.loadVariables();
        }
    
        loadData(){
            this.meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
                         "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", 
                         "Diciembre"];
            this.dias = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", 
                        "Sabado"];
        }
    
        loadVariables(){
            let date = new Date(this.time);
            this.day = date.getDate();
            this.month = date.getMonth();
            this.year = date.getFullYear();
            this.dayWeek = date.getDay();
            
        }
        
        showDate(): number{
            return this.time;
        }
        
        getDateFormatNumeric(): string{
            //let time = new Date(this.time).getTime();
            
            let dayS: string;
            let monthS: string;
            let month: number;
            if (this.day < 10){
                dayS = "0" + this.day.toString();
            }else{
                dayS = this.day.toString();
            }
            
            month = this.month + 1;
            
            if(month < 10){
                monthS = "0" + month.toString();
            }else{
                monthS = month.toString();
            }
                
            
            var fullDate = dayS + "/" + monthS + "/" + this.year
            return fullDate;                
        }
    
        getDateMonthString():string{            
            
            let diaString = this.dias[this.dayWeek];
            let mesString = this.meses[this.month];
            
            return diaString + " " + this.day + " de " + mesString + " de " + this.year;    
            
        }
        
    }
    
}


export { DateCon };