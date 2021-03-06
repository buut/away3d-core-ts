///<reference path="../../../src/away/_definitions.ts" />

//------------------------------------------------------------------------------------------------
// Web / PHP Storm arguments string
//------------------------------------------------------------------------------------------------
// --sourcemap $ProjectFileDir$/tests/away/utils/TimerTest.ts --target ES5 --comments --out $ProjectFileDir$/tests/away/utils/TimerTest.js
//------------------------------------------------------------------------------------------------

class TimerTest
{

    private oneSecondTimer  : away.utils.Timer;
    private repeatTenTimes  : away.utils.Timer;

    constructor()
    {

        this.oneSecondTimer = new away.utils.Timer( 1000 );
        this.oneSecondTimer.addEventListener(away.events.TimerEvent.TIMER , this.onSecTimerEvent , this );
        this.oneSecondTimer.start();

        this.repeatTenTimes = new away.utils.Timer( 100 , 10 );
        this.repeatTenTimes.addEventListener(away.events.TimerEvent.TIMER , this.repeatTenTimesEvent , this );
        this.repeatTenTimes.addEventListener(away.events.TimerEvent.TIMER_COMPLETE, this.repeatTenTimesComplete, this );
        this.repeatTenTimes.start();

    }

    private repeatTenTimesEvent( e : away.events.TimerEvent ) : void
    {


        var t : away.utils.Timer = <away.utils.Timer> e.target;
        console.log('repeatTenTimesEvent' , t.currentCount );

    }

    private repeatTenTimesComplete( e : away.events.TimerEvent ) : void
    {

        var t : away.utils.Timer = <away.utils.Timer> e.target;
        console.log('repeatTenTimesComplete' , t.currentCount );

    }

    private onSecTimerEvent( e : away.events.TimerEvent ) : void
    {

        console.log('onSecTimerEvent, tick');
        console.log( 'getTimer() : ' , away.utils.getTimer() );

    }

}



var GL = null;//: WebGLRenderingContext;


window.onload = function ()
{
    var canvas : HTMLCanvasElement = document.createElement('canvas');
    GL = canvas.getContext("experimental-webgl");

    var test = new TimerTest();


}


