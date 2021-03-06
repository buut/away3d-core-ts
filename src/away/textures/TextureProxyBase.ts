

///<reference path="../_definitions.ts"/>

module away.textures
{

	export class TextureProxyBase extends away.library.NamedAssetBase implements away.library.IAsset
	{
		private _format         : string = away.display3D.Context3DTextureFormat.BGRA;
		private _hasMipmaps     : boolean = true;

		private _textures       : away.display3D.TextureBase[];
		private _dirty          : away.display3D.Context3D[];

		private _width          : number;
		private _height         : number;

		constructor()
		{

            super();

            this._textures      = new Array<away.display3D.TextureBase>( 8 );//_textures = new Vector.<TextureBase>(8);
            this._dirty         = new Array<away.display3D.Context3D>( 8 );//_dirty = new Vector.<Context3D>(8);

		}

        /**
         *
         * @returns {boolean}
         */
		public get hasMipMaps() : boolean
		{
			return this._hasMipmaps;
		}

        /**
         *
         * @returns {string}
         */
		public get format() : string
		{
			return this._format;
		}

        /**
         *
         * @returns {string}
         */
		public get assetType() : string
		{
			return away.library.AssetType.TEXTURE;
		}

        /**
         *
         * @returns {number}
         */
		public get width() : number
		{
			return this._width;
		}

        /**
         *
         * @returns {number}
         */
		public get height() : number
		{
			return this._height;
		}

        /* TODO: implement Stage3DProxy
		public getTextureForStage3D(stage3DProxy : Stage3DProxy) : TextureBase
		{
			var contextIndex : number = stage3DProxy._stage3DIndex;
			var tex : TextureBase = _textures[contextIndex];
			var context : Context3D = stage3DProxy._context3D;

			if (!tex || _dirty[contextIndex] != context) {
				_textures[contextIndex] = tex = createTexture(context);
				_dirty[contextIndex] = context;
				uploadContent(tex);//_pUploadContent
			}

			return tex;
		}
        */

        /**
         *
         * @param texture
         * @private
         */
		public _pUploadContent(texture : away.display3D.TextureBase) : void
		{

            throw new away.errors.AbstractMethodError();

		}

        /**
         *
         * @param width
         * @param height
         * @private
         */
		public _pSetSize(width : number, height : number) : void
		{

			if (this._width != width || this._height != height)
            {

                this._pInvalidateSize();

            }

            this._width     = width;
            this._height    = height;

		}

        /**
         *
         */
		public invalidateContent() : void
		{

			for (var i : number = 0; i < 8; ++i)
            {

				this._dirty[i] = null;

			}

		}

        /**
         *
         * @private
         */
		public _pInvalidateSize() : void
		{
			var tex : away.display3D.TextureBase;
			for (var i : number = 0; i < 8; ++i)
            {

				tex = this._textures[i];

				if (tex)
                {
					tex.dispose();

					this._textures[i]   = null;
					this._dirty[i]      = null;

				}

			}

		}

        /**
         *
         * @param context
         * @private
         */
		public _pCreateTexture( context : away.display3D.Context3D) : away.display3D.TextureBase
		{
            throw new away.errors.AbstractMethodError();
		}

		/**
		 * @inheritDoc
		 */
		public dispose() : void
		{
			for (var i : number = 0; i < 8; ++i)
            {

                if (this._textures[i])
                {

                    this._textures[i].dispose();
                }

            }

		}

	}
}