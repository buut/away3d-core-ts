/**
 * ...
 * @author Gary Paluk - http://www.plugin.io
 */

///<reference path="../_definitions.ts"/>
 
module away.display3D
{
	export class Program3D
	{
		private _program: WebGLProgram;
		private _vertexShader: WebGLShader;
		private _fragmentShader: WebGLShader;
		
		constructor()
		{
			this._program = GL.createProgram();
		}
		
		public upload( vertexProgram:string, fragmentProgram:string )
		{
			
			this._vertexShader = GL.createShader( GL.VERTEX_SHADER );
			this._fragmentShader = GL.createShader( GL.FRAGMENT_SHADER );
			
			GL.shaderSource( this._vertexShader, vertexProgram );
			GL.compileShader( this._vertexShader );
			
			if ( !GL.getShaderParameter( this._vertexShader, GL.COMPILE_STATUS ) )
			{
				alert( GL.getShaderInfoLog( this._vertexShader ) );
				return null; //TODO throw errors
			}
			
			GL.shaderSource( this._fragmentShader, fragmentProgram );
			GL.compileShader( this._fragmentShader );
			
			if ( !GL.getShaderParameter( this._fragmentShader, GL.COMPILE_STATUS ) )
			{
				alert( GL.getShaderInfoLog( this._fragmentShader ) );
				return null; //TODO throw errors
			}
			
			GL.attachShader( this._program, this._vertexShader );
			GL.attachShader( this._program, this._fragmentShader );
			GL.linkProgram( this._program );
			
			if ( !GL.getProgramParameter( this._program, GL.LINK_STATUS ) )
			{
				alert("Could not link the program."); //TODO throw errors
			}
		}
		
		public dispose()
		{
			GL.deleteProgram( this._program );
		}
		
		public focusProgram()
		{
			GL.useProgram( this._program );
		}
		
		public get glProgram():WebGLProgram
		{
			return this._program;
		}
	}
}