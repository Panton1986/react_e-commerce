function Item(props) {
    const {
        mainId,
        displayName,
        displayAssets = [],
        price = [],
        granted = [],
        addToBasket = Function.prototype
    } = props;

    return  <div className="card">
                <div className="card-image">
                    <img src={displayAssets[0].full_background} alt={displayName}/>
                </div>
                <div className="card-content">
                    <span className="card-title">{displayName}</span>
                    <p>{granted[0].description}</p>
                </div>
                <div className="card-action">
                    <button class="btn" onClick={() => addToBasket({
                        mainId,
                        displayName,
                        price,
                        displayAssets
                    }
                    )}>BUY</button>                    
                    <span className="right" style={{fontSize: '1.8rem'}}>${price.finalPrice}</span>
                </div>
            </div>
}
export {Item}

// {
//     "mainId": "MirageHike_Bundle",
//     "displayName": "Singing Siren Bundle",
//     "displayDescription": "",
//     "displayType": "6 Item Bundle",
//     "mainType": "bundle",
//     "offerId": "v2:/9a16b2882c6dab59c2de9301e8a7bba52372fcf6c2ea8f16e948510e52dc72ce",
//     "displayAssets": [
//         {
//             "displayAsset": "DAv2_Bundle_Featured_MirageHike",
//             "materialInstance": "MI_Bundle_Featured_MirageHike",
//             "url": "https://media.fortniteapi.io/images/displayAssets/v2/DAv2_Bundle_Featured_MirageHike/MI_Bundle_Featured_MirageHike.png",
//             "flipbook": null,
//             "background_texture": null,
//             "background": "https://media.fortniteapi.io/images/shop/9a16b2882c6dab59c2de9301e8a7bba52372fcf6c2ea8f16e948510e52dc72ce/v2/MI_Bundle_Featured_MirageHike/background.png",
//             "full_background": "https://media.fortniteapi.io/images/shop/9a16b2882c6dab59c2de9301e8a7bba52372fcf6c2ea8f16e948510e52dc72ce/v2/MI_Bundle_Featured_MirageHike/info.en.png"
//         }
//     ],
//     "firstReleaseDate": "2023-04-21",
//     "previousReleaseDate": null,
//     "giftAllowed": true,
//     "buyAllowed": true,
//     "price": {
//         "regularPrice": 2400,
//         "finalPrice": 1700
//     },
//     "rarity": {
//         "id": "Rare",
//         "name": "RARE"
//     },
//     "series": null,
//     "banner": {
//         "id": "vbucksoff",
//         "name": "700 V-Bucks Off",
//         "intensity": "Low"
//     },
//     "offerTag": {
//         "id": "bundleincludesloadingscreen",
//         "text": "Bundle includes loading screen!"
//     },
//     "granted": [
//         {
//             "id": "Character_MirageHike",
//             "type": {
//                 "id": "outfit",
//                 "name": "Outfit"
//             },
//             "name": "Serenade",
//             "description": "Transformed by tranquil waters.",
//             "rarity": {
//                 "id": "Rare",
//                 "name": "RARE"
//             },
//             "series": null,
//             "images": {
//                 "icon": "https://media.fortniteapi.io/images/13e65adcee39ef697a20bbb9249ec9d9/transparent.png",
//                 "featured": "https://media.fortniteapi.io/images/13e65adcee39ef697a20bbb9249ec9d9/full_featured.png",
//                 "background": "https://media.fortniteapi.io/images/cosmetics/13e65adcee39ef697a20bbb9249ec9d9/v2/background.png",
//                 "icon_background": "https://media.fortniteapi.io/images/cosmetics/13e65adcee39ef697a20bbb9249ec9d9/v2/icon_background.png",
//                 "full_background": "https://media.fortniteapi.io/images/cosmetics/13e65adcee39ef697a20bbb9249ec9d9/v2/info.en.png"
//             },
//             "video": null,
//             "audio": null,
//             "gameplayTags": [
//                 "Cosmetics.Filter.Season.24",
//                 "Cosmetics.Source.ItemShop",
//                 "Cosmetics.Set.ChantingCharmer",
//                 "SoundLibrary.ID.StepType.BootsCombat",
//                 "SoundLibrary.ID.ClothingType.Generic",
//                 "SoundLibrary.ID.HandType.Glove"
//             ],
//             "set": {
//                 "id": "ChantingCharmer",
//                 "name": "Ethereal Song",
//                 "partOf": "Part of the Ethereal Song set."
//             }
//         },
//         {
//             "id": "Backpack_MirageHike",
//             "type": {
//                 "id": "backpack",
//                 "name": "BackBling"
//             },
//             "name": "Fluttering Notes",
//             "description": "Let your song soar.",
//             "rarity": {
//                 "id": "Rare",
//                 "name": "RARE"
//             },
//             "series": null,
//             "images": {
//                 "icon": "https://media.fortniteapi.io/images/ea2e1d57e323974e7cc1d1040c60ee77/transparent.png",
//                 "featured": null,
//                 "background": "https://media.fortniteapi.io/images/cosmetics/ea2e1d57e323974e7cc1d1040c60ee77/v2/background.png",
//                 "icon_background": "https://media.fortniteapi.io/images/cosmetics/ea2e1d57e323974e7cc1d1040c60ee77/v2/icon_background.png",
//                 "full_background": "https://media.fortniteapi.io/images/cosmetics/ea2e1d57e323974e7cc1d1040c60ee77/v2/info.en.png"
//             },
//             "video": null,
//             "audio": null,
//             "gameplayTags": [
//                 "Cosmetics.Set.ChantingCharmer",
//                 "Cosmetics.Source.ItemShop",
//                 "Cosmetics.Filter.Season.24"
//             ],
//             "set": {
//                 "id": "ChantingCharmer",
//                 "name": "Ethereal Song",
//                 "partOf": "Part of the Ethereal Song set."
//             }
//         },
//         {
//             "id": "Pickaxe_MirageHike",
//             "type": {
//                 "id": "pickaxe",
//                 "name": "Harvesting Tool"
//             },
//             "name": "Seabound Slasher",
//             "description": "Cut through more than rough waters.",
//             "rarity": {
//                 "id": "Uncommon",
//                 "name": "UNCOMMON"
//             },
//             "series": null,
//             "images": {
//                 "icon": "https://media.fortniteapi.io/images/2a4083ad37cee18850d4eba93fbfd099/transparent.png",
//                 "featured": "https://media.fortniteapi.io/images/2a4083ad37cee18850d4eba93fbfd099/full_featured.png",
//                 "background": "https://media.fortniteapi.io/images/cosmetics/2a4083ad37cee18850d4eba93fbfd099/v2/background.png",
//                 "icon_background": "https://media.fortniteapi.io/images/cosmetics/2a4083ad37cee18850d4eba93fbfd099/v2/icon_background.png",
//                 "full_background": "https://media.fortniteapi.io/images/cosmetics/2a4083ad37cee18850d4eba93fbfd099/v2/info.en.png"
//             },
//             "video": null,
//             "audio": null,
//             "gameplayTags": [
//                 "Cosmetics.Pickaxe.OneHanded",
//                 "Cosmetics.Filter.Season.24",
//                 "Cosmetics.Set.ChantingCharmer",
//                 "Cosmetics.Source.ItemShop"
//             ],
//             "set": {
//                 "id": "ChantingCharmer",
//                 "name": "Ethereal Song",
//                 "partOf": "Part of the Ethereal Song set."
//             }
//         },
//         {
//             "id": "Wrap_MirageHike",
//             "type": {
//                 "id": "wrap",
//                 "name": "Wrap"
//             },
//             "name": "Overflow",
//             "description": "Show your style.",
//             "rarity": {
//                 "id": "Rare",
//                 "name": "RARE"
//             },
//             "series": null,
//             "images": {
//                 "icon": "https://media.fortniteapi.io/images/026e8a67f7a73a5687efaf960f0bbcab/transparent.png",
//                 "featured": "https://media.fortniteapi.io/images/026e8a67f7a73a5687efaf960f0bbcab/full_featured.png",
//                 "background": "https://media.fortniteapi.io/images/cosmetics/026e8a67f7a73a5687efaf960f0bbcab/v2/background.png",
//                 "icon_background": "https://media.fortniteapi.io/images/cosmetics/026e8a67f7a73a5687efaf960f0bbcab/v2/icon_background.png",
//                 "full_background": "https://media.fortniteapi.io/images/cosmetics/026e8a67f7a73a5687efaf960f0bbcab/v2/info.en.png"
//             },
//             "video": null,
//             "audio": null,
//             "gameplayTags": [
//                 "Cosmetics.Filter.Season.24",
//                 "Cosmetics.UserFacingFlags.Reactive.WeaponFire",
//                 "Cosmetics.Set.ChantingCharmer",
//                 "Cosmetics.Source.ItemShop"
//             ],
//             "set": {
//                 "id": "ChantingCharmer",
//                 "name": "Ethereal Song",
//                 "partOf": "Part of the Ethereal Song set."
//             }
//         },
//         {
//             "id": "MusicPack_176_MirageHiker",
//             "type": {
//                 "id": "music",
//                 "name": "Music"
//             },
//             "name": "Serenade's Song",
//             "description": "Press play and let your drip drop.",
//             "rarity": {
//                 "id": "Rare",
//                 "name": "RARE"
//             },
//             "series": null,
//             "images": {
//                 "icon": "https://media.fortniteapi.io/images/1eb7963bdedce3bc1a5fa16af6fb1911/transparent.png",
//                 "featured": "https://media.fortniteapi.io/images/1eb7963bdedce3bc1a5fa16af6fb1911/full_featured.png",
//                 "background": "https://media.fortniteapi.io/images/cosmetics/1eb7963bdedce3bc1a5fa16af6fb1911/v2/background.png",
//                 "icon_background": "https://media.fortniteapi.io/images/cosmetics/1eb7963bdedce3bc1a5fa16af6fb1911/v2/icon_background.png",
//                 "full_background": "https://media.fortniteapi.io/images/cosmetics/1eb7963bdedce3bc1a5fa16af6fb1911/v2/info.en.png"
//             },
//             "video": "https://media.fortniteapi.io/videos/musicpacks/musicpack_176_miragehiker.mp4",
//             "audio": "https://media.fortniteapi.io/audio/musicpacks/musicpack_176_miragehiker.mp3",
//             "gameplayTags": [
//                 "Cosmetics.Filter.Season.24",
//                 "Cosmetics.Set.ChantingCharmer"
//             ],
//             "set": {
//                 "id": "ChantingCharmer",
//                 "name": "Ethereal Song",
//                 "partOf": "Part of the Ethereal Song set."
//             }
//         },
//         {
//             "id": "LoadingScreen_Mirage",
//             "type": {
//                 "id": "loadingscreen",
//                 "name": "Loading Screen"
//             },
//             "name": "Hypnotic Gaze",
//             "description": "Let the music haunt you.",
//             "rarity": {
//                 "id": "Uncommon",
//                 "name": "UNCOMMON"
//             },
//             "series": null,
//             "images": {
//                 "icon": "https://media.fortniteapi.io/images/4d3d7506a9f2d352ae91a3bd35bcb3a1/transparent.png",
//                 "featured": "https://media.fortniteapi.io/images/4d3d7506a9f2d352ae91a3bd35bcb3a1/full_featured.png",
//                 "background": "https://media.fortniteapi.io/images/cosmetics/4d3d7506a9f2d352ae91a3bd35bcb3a1/v2/background.png",
//                 "icon_background": "https://media.fortniteapi.io/images/cosmetics/4d3d7506a9f2d352ae91a3bd35bcb3a1/v2/icon_background.png",
//                 "full_background": "https://media.fortniteapi.io/images/cosmetics/4d3d7506a9f2d352ae91a3bd35bcb3a1/v2/info.en.png"
//             },
//             "video": null,
//             "audio": null,
//             "gameplayTags": [
//                 "Cosmetics.Filter.Season.24",
//                 "Cosmetics.Set.ChantingCharmer"
//             ],
//             "set": {
//                 "id": "ChantingCharmer",
//                 "name": "Ethereal Song",
//                 "partOf": "Part of the Ethereal Song set."
//             }
//         }
//     ],
//     "priority": -1,
//     "section": {
//         "id": "Featured",
//         "name": "Featured",
//         "landingPriority": 65
//     },
//     "groupIndex": 0,
//     "storeName": "BRWeeklyStorefront",
//     "tileSize": "DoubleWide",
//     "categories": [
//         "Panel 01"
//     ]
// },