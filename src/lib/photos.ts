/**
 * Stock sauna photos used until the client supplies their own.
 *
 * All are free under the Unsplash License (commercial use allowed, no attribution
 * required; credit kept here anyway). They are hot-linked from Unsplash's image CDN,
 * which resizes them and serves WebP/AVIF to browsers that support it (auto=format).
 *
 * To use a real photo instead, drop a WebP into static/images/ and pass
 * asset('images/your-photo.webp') as the Photo's src (see the About page lounge photo).
 * Real client photos always win over these.
 */

export type StockPhoto = {
  src: string;
  srcset: string;
  alt: string;
  credit: string;
  creditUrl: string;
};

const widths = [480, 800, 1200, 1600];

function unsplash(id: string, alt: string, credit: string, creditUrl: string): StockPhoto {
  const url = (w: number) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=75`;
  return {
    src: url(1200),
    srcset: widths.map((w) => `${url(w)} ${w}w`).join(', '),
    alt,
    credit,
    creditUrl,
  };
}

export const photos = {
  saunaInterior: unsplash(
    'photo-1786799901347-e45b3e2d64ea',
    'Wooden sauna with tiered benches and a window onto the forest',
    'Clay Banks / Unsplash',
    'https://unsplash.com/photos/wooden-sauna-interior-with-forest-view-xrjx6nX3Mp4',
  ),
  electricHeater: unsplash(
    'photo-1741601272844-05a3677463f3',
    'Electric sauna heater filled with stones',
    'HUUM / Unsplash',
    'https://unsplash.com/photos/a-sauna-heater-filled-with-stones-IsA_Ihx0sYo',
  ),
  steam: unsplash(
    'photo-1741601272577-fc2c46f87d9f',
    'Steam rising from hot sauna stones',
    'HUUM / Unsplash',
    'https://unsplash.com/photos/a-steamy-sauna-with-hot-rocks-and-a-view-0c2rYMKE7ow',
  ),
  pouringWater: unsplash(
    'photo-1741601274134-fa98352f1c95',
    'Water poured on hot sauna stones for steam',
    'HUUM / Unsplash',
    'https://unsplash.com/photos/a-man-pours-water-on-hot-sauna-rocks-6eTBDTexZpM',
  ),
  woodenBucket: unsplash(
    'photo-1567110973513-2a239896072e',
    'Wooden sauna bucket in a beam of light',
    'Anne Nygård / Unsplash',
    'https://unsplash.com/photos/round-brown-wooden-bucket-FQDaYrXjkKo',
  ),
  rusticSauna: unsplash(
    'photo-1678988227223-45112511eca2',
    'Rustic wooden sauna with a bucket and ladles',
    'Lukas Kubica / Unsplash',
    'https://unsplash.com/photos/a-wooden-sauna-with-a-black-bucket-and-two-wooden-spoons-oqDNoKPf4YM',
  ),
  hotTubDeck: unsplash(
    'photo-1772040942277-b194d9d0b648',
    'Hot tub on a wooden deck in a green garden',
    'Hot Tubs of London / Unsplash',
    'https://unsplash.com/photos/hot-tub-on-a-wooden-deck-surrounded-by-lush-garden-5uq6nHOYRfw',
  ),
  hotTubWater: unsplash(
    'photo-1634253539564-8887939e239f',
    'Outdoor hot tub next to the water',
    'Erik Mclean / Unsplash',
    'https://unsplash.com/photos/a-hot-tub-sitting-next-to-a-body-of-water-3KZ2zIcV0g8',
  ),
  hotTubSnow: unsplash(
    'photo-1708630283392-678476d547f8',
    'Steaming hot tub in a snowy field',
    'Barnabas Davoti / Unsplash',
    'https://unsplash.com/photos/a-hot-tub-in-the-middle-of-a-snowy-field-3k7qEMZjhqo',
  ),
} satisfies Record<string, StockPhoto>;
