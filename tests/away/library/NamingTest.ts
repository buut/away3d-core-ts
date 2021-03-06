///<reference path="../../../src/away/_definitions.ts" />

//------------------------------------------------------------------------------------------------
// Web / PHP Storm arguments string
//------------------------------------------------------------------------------------------------
// --sourcemap $ProjectFileDir$/tests/away/library/NamingTest.ts --target ES5 --comments --out $ProjectFileDir$/tests/away/library/NamingTest.js
//------------------------------------------------------------------------------------------------

class NamingTest
{

    private csb     : away.library.ConflictStrategyBase = new away.library.ConflictStrategyBase();
    private ecsb    : away.library.ErrorConflictStrategy = new away.library.ErrorConflictStrategy();
    private nscs    : away.library.NumSuffixConflictStrategy = new away.library.NumSuffixConflictStrategy();
    private cs      : away.library.ConflictStrategy = new away.library.ConflictStrategy();
    private ics     : away.library.IgnoreConflictStrategy = new away.library.IgnoreConflictStrategy();
    private cp      : away.library.ConflictPrecedence = new away.library.ConflictPrecedence();

    constructor()
    {

        away.library.ConflictStrategy.APPEND_NUM_SUFFIX;
        away.library.ConflictStrategy.IGNORE;
        away.library.ConflictStrategy.THROW_ERROR;

    }

}

var GL = null;//: WebGLRenderingContext;
var test: NamingTest;
window.onload = function ()
{

    var canvas : HTMLCanvasElement = document.createElement('canvas');
    GL = canvas.getContext("experimental-webgl");

    test = new NamingTest();

}
