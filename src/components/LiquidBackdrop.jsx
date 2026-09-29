/**
 * Liquid light field.
 *
 * A fixed, monochrome field of three slow drifting blobs sitting behind the
 * entire page. It is not decoration on its own: it is the light that the
 * glass surfaces in `.glass` / `.shell-core` refract. Remove it and the
 * cards go flat, because a translucent fill with nothing behind it has
 * nothing to show.
 *
 * Each blob animates `transform` only and is a promoted layer, so the 90px
 * blur behind it is rasterised once rather than every frame. Colour comes
 * from the blob tokens, which are near-transparent in both modes, so the
 * palette stays strictly monochrome.
 */
const LiquidBackdrop = () => (
  <div className="liquid-field" aria-hidden="true">
    <span className="liquid-blob blob-1" />
    <span className="liquid-blob blob-2" />
    <span className="liquid-blob blob-3" />
  </div>
);

export default LiquidBackdrop;