// Define the data for the carousels in the netflix app

class sliderRow {
    constructor(title, slides) {
        this.title = title;
        this.slides = slides;
    }
}

let row1 = new sliderRow("My List",
    ['https://occ-0-806-1167.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABTPyRHNSW1vw5AqBh9hg7X8rE-JaLnb6lmFkrPjgbeus8F0GY0Iu31HEL7RlmA2LnOrO6nXGBRe0l-NL0umjWtqh6P0_Atv9PJY8KHSyv7_14y-TtWXpP9km8pM0xeYk315_TDZ7pxhT7JCpRxu6PsQxXIje9O7kzEP6jp5mLz7399-ySoCPLOpdrwXyQry-pQkSFgPpagoukslnXwDVWiOv56bu92IbYnvBW87625nYIlgb9n3wXobtXc7jhjDFfpG6lfTvreMkosAnVZCDFdXULXDwm_YtneW2CD3Y7lIfoc9N-gGl_um7xyqTiPyH_aWXhtjB5olIE2uGGo50TaUHZMMsbP5Rsd61ilqapJfgDj9y86TyEXGZsp2FROGKvJFBbgXpnTHC1Hh7h2gga8v5fbJMsGxkadAn2LBy0UDobw.webp?r=651'
        , 'https://occ-0-806-1167.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABVFdv3s9N6USFz2rEyDGmgbNMMTk4KnB7twNjq6afm8pQ81zbBkMK_xnbEh-rKSspiTNMEN37v4ByHgVtZEjxwFOZ36_3PjEZ7loFaxzY_CNK3W8u9nxMxgWoTWs7VJwZGdh.jpg?r=d7f'
        , 'https://occ-0-806-1167.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABVNbxy7FdzsYPE5_TFRPH7wwAGmx3Wfv4ds7q33nBQugA5_oenmdVFrqLwUHcACoA0w8438fz8cNIyY9U7mKvBrKhdF1yoiv-aMJDk9qOvtCE98vU1jV5WJjnmZD938CSoUH.jpg?r=c1c'
        , 'https://occ-0-806-1167.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABaJBeUy2_rE0VhUnG39E6aaPsnGWSlWP0hHDjFBCSSPyjGUoLEFx8N2M-oxhFXoTDAQ5ZFUNef0VBwPxvqw7sTAfDpfEFwXfDnhnuiYfnR3BAloxUdMaSMAoaNKFDvesYful.jpg?r=c86'
        , 'https://occ-0-806-1167.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABVanRRU0SxKVbE451pr8Yo3kdFgFIkrPrxtodxhBcAXTpVaBXSk1zAOZrPIGs_i2Ao2zhzxCtGSIUN2O6FMlX_XbYGGG7jBND5E.webp?r=452'
        , 'https://occ-0-806-1167.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABTiHlsf6iXaiHKCumhnlgaOQnptPC8boWTyRR8-gsHzG2Vf-cVDk6EdjcNyCwfoUlgm6FiXYRt-hspG4BdUoLlU1QYRK3Ayjr1vw4gqIxTcjYXbByOIpp9-VXyXiMDMXZt_p.jpg?r=82d'
        , 'https://occ-0-806-1167.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABRL7HDbP3xSXuQIw6koG3G1DoqNEAC_NS1RsDBBBlSKMrOJ4QBgEiccq1KlFASIPKU_TVGDWYPFMTyaXVFGFm4tXa738QX3_NcEp6XInNAxmO4vuyg06HNHbHUJ3_OHOrBLwL3xNAtqY7H2XCHQfXnBhSklXHp6wFm1RI2TQOw4aXZmwWwhH7L-RzSC3AQT2yZygPajQ8MoIQkFGvz5yQyaB_EV7yeYWSpy7z9HoXWBWFI-JwbOv5cei4tXHT5wHQ1KKzS_7DkMobELB0skucEH_ZDVR-nwqn9aulREAA8gG8NA_f8gOY-hjdB3583auWjHCbHz0mUeGnV4UQrM_6Nsu5m7pwvPalmtE6Hwsfn8zxkogbO6n4PYIrbCcT5RhK__DRHFoRrEXZEvsQGbELyIpfO2T65n5b3vGXcScBLTwIQ.webp?r=012'
        , 'https://occ-0-806-1167.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABdc1Lasmf2gbMJnYGfsuH6IAnZnA8j_q1rKz2Fr0q1R22EEQBvpXjzQBPhV2hWOAyqgAUSq2S5w26X3O__xR4Vh2QZ0Ay0Vl5zo.webp?r=248'
        , 'https://occ-0-806-1167.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABexRvlPUNKk2lQhN2gNz-osqi1yGPZl9mVUz4jHwC44KjYYOg8dE7H78sdEVGO3u1zghB2G81anI7mNbVjGInq5bt9hyCoOHpMw.webp?r=379'
        , 'https://occ-0-806-1167.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABXlXCMOTFlWrId9A1zdjQ2kvR6_LZM-l7XlE2RqBfOebIVvjv1hQZsF0D5v5RwsQRJ1S_goxExM26_OgwniXTs3rGpcnM_ok9hg.webp?r=6ba'

    ])

let row2 = new sliderRow("New on Netflix", ['https://occ-0-806-1167.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABbW1V65DtvAUnVcemF8e_Z65Dl6bbW-gf-oSAVhilGKSvsj5T951j22vhwlfvvAz41o7V7XQSgTUSWu-2MysxMmhLTDCgljF0ZY.webp?r=34b'
    , 'https://occ-0-806-1167.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABdFBoXGVfU9KxQFk9hj2zYhyfZScgzoi8H1ERIKh50uY7gdyNQE3w6KEtDdpQKwEI5cKV5rkZDqZpO5EDZf0-K0coj-uz0U5wso.webp?r=d50'
    , 'https://occ-0-806-1167.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABZPJydminnphekHC1Thc7pREoPt-fPLyhUyyE--5v9wxFJPuzd-2HerONNjvm-rsUI_tEWk5VSnj5fDId6-uzIvXYB1VXglA3KTrG2pHTBH9-1p1l3rvASeOp_SkK_vzuGZ_1ahcmaZ88LSW8KTLugPm1YDNIaWG3Ic.webp?r=c1b'
    , 'https://occ-0-806-1167.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABd6w9lSglaEqnK_CBGSBU0aUoEdZkt3NOMXPm_kx5mz-akaBQacK6fyPeeWsME4cU-nrz7MviDPRDZEGHCqMaVnknTLCFC8q3lVO_jqFzEQhQAKj1alVLqwupUptAaMVe7wF.jpg?r=a37'
    , 'https://occ-0-806-1167.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABcRxzffDa1-RrBtLBtoJoi-6L_Bh2qtey80tUJ7diNlXVC5z5BL0lGAL-tok54-rtDJDBNFhmK4JsJWWlKWKZhApmpNeCLUYx93YGZGmKHXjAvftok3269OoAA2JGi3bODeQNARigeXEobVFOXJNJgyBRfFrOMn7VzDJ9UDhwwlVBRQJ9QjsYbWWCpBt-JJgQvHiGcGSWFYj9o3C2XdNJbo8z71Pi1ZXkLY9ET6ihWKa3jMkynoMaZFMQb2_Bt_UznYHIBwJG_5hEqxB8lIEZ_IO3OSMU0k-WUVTKaJC_1-H5kP6v-g.jpg?r=270'
    , 'https://occ-0-806-1167.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABTPyRHNSW1vw5AqBh9hg7X8rE-JaLnb6lmFkrPjgbeus8F0GY0Iu31HEL7RlmA2LnOrO6nXGBRe0l-NL0umjWtqh6P0_Atv9PJY8KHSyv7_14y-TtWXpP9km8pM0xeYk315_TDZ7pxhT7JCpRxu6PsQxXIje9O7kzEP6jp5mLz7399-ySoCPLOpdrwXyQry-pQkSFgPpagoukslnXwDVWiOv56bu92IbYnvBW87625nYIlgb9n3wXobtXc7jhjDFfpG6lfTvreMkosAnVZCDFdXULXDwm_YtneW2CD3Y7lIfoc9N-gGl_um7xyqTiPyH_aWXhtjB5olIE2uGGo50TaUHZMMsbP5Rsd61ilqapJfgDj9y86TyEXGZsp2FROGKvJFBbgXpnTHC1Hh7h2gga8v5fbJMsGxkadAn2LBy0UDobw.webp?r=651'
    , 'https://occ-0-806-1167.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABZOyivDiIC9rwzYIfJZn1v6HgS59MH0KJAA6iQvmlqmlF_9sGSvohxhrtbasy58aiugjpS3aRljpy4bGVIvKq6jS7Cpl46eaSszKsT2e7ocupje2i3_ImdshEnp7Gu8WeRa2.jpg?r=e93'
    , 'https://occ-0-806-1167.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABbDp7LDzf3Gp-BiXFs4IehcgKQP6Ijwln_5GiwrhPXUphNu7pKjIK5fXnWYxT_KbLZ4S99LZyIxftHhaO7pt4aBYhpZmt5ZKTlqPWTGM4iLvDRaUe3ys1bqTg_MiDMyFwC-P.jpg?r=35e'
    , 'https://occ-0-806-1167.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABa_KnziT2daUilRi6qpXmJanDUrjxqcIg5K6n872oep-WcYF_vM6fcXce0KM186DXFnt5ccZ4pablTCleKsMvpz40MyY-xXrTR4yCygxAAXJiX4BOESq7fmW_40hAjZ7r6RAus_zNzFYK2ZYOjog_d0EW6a1hdLz5j042jAGKiZbxIjA4tafpQQvYsmRe0A.jpg?r=7b0']);



let row3 = new sliderRow("Today's Top Picks for You", ['https://occ-0-806-1167.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABQ6uJ_wWbpU25vg2Ksdi16uQMhaCFipH7mb-Mtbk_53_oypoCRRcliFM3FZ1VqQ-pB1T9gsYapa0_JANV6jYOehTfAIWbAxtmH6ozynCLm5PcNgJyC8eRSR9CM-l8nVcI2bd.jpg?r=6f1'
    , 'https://occ-0-806-1167.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABXGLLsxe7OeBQHKNZkuulw5mkxvq8ZWZMiBSt2lCl2ZoUmoDgvpezH9a1ecZn_bE6N5z63mNd3TEM5xf9OYjwP5L1aYfIUHwVRk.webp?r=a1d'
    , 'https://occ-0-806-1167.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABWHcelqG89OYvPdy1CmSuupAV66nu9wZ6N1BJKOeKWvW6c2Bf04GD6yI9ftLF1jUOYEnqhk820WeorcvRr4yh26NomrEwxnbjL4.webp?r=120'
    , 'https://occ-0-806-1167.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABaJBeUy2_rE0VhUnG39E6aaPsnGWSlWP0hHDjFBCSSPyjGUoLEFx8N2M-oxhFXoTDAQ5ZFUNef0VBwPxvqw7sTAfDpfEFwXfDnhnuiYfnR3BAloxUdMaSMAoaNKFDvesYful.jpg?r=c86'
    , 'https://occ-0-806-1167.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABZPJydminnphekHC1Thc7pREoPt-fPLyhUyyE--5v9wxFJPuzd-2HerONNjvm-rsUI_tEWk5VSnj5fDId6-uzIvXYB1VXglA3KTrG2pHTBH9-1p1l3rvASeOp_SkK_vzuGZ_1ahcmaZ88LSW8KTLugPm1YDNIaWG3Ic.webp?r=c1b'
    , 'https://occ-0-806-1167.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABVFdv3s9N6USFz2rEyDGmgbNMMTk4KnB7twNjq6afm8pQ81zbBkMK_xnbEh-rKSspiTNMEN37v4ByHgVtZEjxwFOZ36_3PjEZ7loFaxzY_CNK3W8u9nxMxgWoTWs7VJwZGdh.jpg?r=d7f'
    , 'https://occ-0-806-1167.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABdHvk4W1sGKuIxJ-8KivVM4xrrad0v48Cfruix-ep9gfU8P4V9MgwR1E0bnh_2Jyfaf-JtgdQHW86o0atU-E7RaTPpFw-d4hMXU.webp?r=914'
    , 'https://occ-0-806-1167.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABdFBoXGVfU9KxQFk9hj2zYhyfZScgzoi8H1ERIKh50uY7gdyNQE3w6KEtDdpQKwEI5cKV5rkZDqZpO5EDZf0-K0coj-uz0U5wso.webp?r=d50'
    , 'https://occ-0-806-1167.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABbW1V65DtvAUnVcemF8e_Z65Dl6bbW-gf-oSAVhilGKSvsj5T951j22vhwlfvvAz41o7V7XQSgTUSWu-2MysxMmhLTDCgljF0ZY.webp?r=34b'
    , 'https://occ-0-806-1167.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABZOyivDiIC9rwzYIfJZn1v6HgS59MH0KJAA6iQvmlqmlF_9sGSvohxhrtbasy58aiugjpS3aRljpy4bGVIvKq6jS7Cpl46eaSszKsT2e7ocupje2i3_ImdshEnp7Gu8WeRa2.jpg?r=e93']);


let row4 = new sliderRow("BAFTA Award Winners & Nominees", [
    "https://occ-0-806-1167.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABXlXCMOTFlWrId9A1zdjQ2kvR6_LZM-l7XlE2RqBfOebIVvjv1hQZsF0D5v5RwsQRJ1S_goxExM26_OgwniXTs3rGpcnM_ok9hg.webp?r=6ba"
    , "https://occ-0-806-1167.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABdHvk4W1sGKuIxJ-8KivVM4xrrad0v48Cfruix-ep9gfU8P4V9MgwR1E0bnh_2Jyfaf-JtgdQHW86o0atU-E7RaTPpFw-d4hMXU.webp?r=914"
    , "https://occ-0-806-1167.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABRL7HDbP3xSXuQIw6koG3G1DoqNEAC_NS1RsDBBBlSKMrOJ4QBgEiccq1KlFASIPKU_TVGDWYPFMTyaXVFGFm4tXa738QX3_NcEp6XInNAxmO4vuyg06HNHbHUJ3_OHOrBLwL3xNAtqY7H2XCHQfXnBhSklXHp6wFm1RI2TQOw4aXZmwWwhH7L-RzSC3AQT2yZygPajQ8MoIQkFGvz5yQyaB_EV7yeYWSpy7z9HoXWBWFI-JwbOv5cei4tXHT5wHQ1KKzS_7DkMobELB0skucEH_ZDVR-nwqn9aulREAA8gG8NA_f8gOY-hjdB3583auWjHCbHz0mUeGnV4UQrM_6Nsu5m7pwvPalmtE6Hwsfn8zxkogbO6n4PYIrbCcT5RhK__DRHFoRrEXZEvsQGbELyIpfO2T65n5b3vGXcScBLTwIQ.webp?r=012"
    , "https://occ-0-806-1167.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABf0GJ6vG4M8GRz5K5rUCEAJELFTGgF6JDnJt1vkri4AzxE9SuAdOpxZRhU5SWkLnioZxqi5j8BWdcvPm6e1OpRqIEH_Pa_MxzZ8.webp?r=cda"
    , 'https://occ-0-806-1167.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABS0zixvIoFPW36gvfs1_kUTJtnzOFGtIl7DXTVn5UzjqU0mSdq2JebXImrxYqHK5nT3zNUdwEakRaRxVoUmGWpOYLk_K1PqL0A8.webp?r=798'
    , 'https://occ-0-806-1167.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABQFPFTt9Bqz0DJ9lt7it2aAtS5ndml8ARoM7vdgtu748Fy8JzKu--4pjWBZRd_LmZRr0Zsxbvi3qJWraNLYIfxdjaRRrpBGz1Z6FDJy4r0DAtPp0GF_OAU4Gz72x4SlDar6D.jpg?r=fa7'
    , 'https://occ-0-806-1167.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABUR_Pc_kNQ493x6Gy-lKVJcbdEYs5UEkjGRe4jDxGJCu1oj3kDVNl5Vz2M0ebeC5mQO3MQykGJiZ89q7SbbX1-WaCzADWJz-MhhUdR1hbweCdmT_Fz_Yx1Zl141az8WUbCWa.jpg?r=1b9'
    , 'https://occ-0-806-1167.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABSEZGD0jRyy0tH0Mm44X9fV-9sLrpWa8NVxUwOwyF0PlQa8tjHva3F_T3aRe8A2dInE94Tzpy6-Q3onNSKj-mBlKVVIKSXxjyjI.webp?r=021'
    , 'https://occ-0-806-1167.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABdc1Lasmf2gbMJnYGfsuH6IAnZnA8j_q1rKz2Fr0q1R22EEQBvpXjzQBPhV2hWOAyqgAUSq2S5w26X3O__xR4Vh2QZ0Ay0Vl5zo.webp?r=248'
    , 'https://occ-0-806-1167.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABexRvlPUNKk2lQhN2gNz-osqi1yGPZl9mVUz4jHwC44KjYYOg8dE7H78sdEVGO3u1zghB2G81anI7mNbVjGInq5bt9hyCoOHpMw.webp?r=379']);


let row5 = new sliderRow("Binge-worthy TV Programmes", [
    'https://occ-0-806-1167.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABVNbxy7FdzsYPE5_TFRPH7wwAGmx3Wfv4ds7q33nBQugA5_oenmdVFrqLwUHcACoA0w8438fz8cNIyY9U7mKvBrKhdF1yoiv-aMJDk9qOvtCE98vU1jV5WJjnmZD938CSoUH.jpg?r=c1c'
    , 'https://occ-0-806-1167.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABVanRRU0SxKVbE451pr8Yo3kdFgFIkrPrxtodxhBcAXTpVaBXSk1zAOZrPIGs_i2Ao2zhzxCtGSIUN2O6FMlX_XbYGGG7jBND5E.webp?r=452'
    , 'https://occ-0-806-1167.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABVzHMT-OQe6ZiUydSAKUEznJDrQcQUpPZudHe-Ab4x6ihj5XiwYI68irq_WMGfLGQc5NiFHET3s4mfAr-kqmqAU4uJvZMqz5LiQSQ3fMbHZmzoFlPkvZEzae9f6nRdRYzHZO.jpg?r=9c3'
    , 'https://occ-0-806-1167.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABTiHlsf6iXaiHKCumhnlgaOQnptPC8boWTyRR8-gsHzG2Vf-cVDk6EdjcNyCwfoUlgm6FiXYRt-hspG4BdUoLlU1QYRK3Ayjr1vw4gqIxTcjYXbByOIpp9-VXyXiMDMXZt_p.jpg?r=82d'
    , 'https://occ-0-806-1167.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABZOyivDiIC9rwzYIfJZn1v6HgS59MH0KJAA6iQvmlqmlF_9sGSvohxhrtbasy58aiugjpS3aRljpy4bGVIvKq6jS7Cpl46eaSszKsT2e7ocupje2i3_ImdshEnp7Gu8WeRa2.jpg?r=e93'
    , 'https://occ-0-806-1167.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABXGLLsxe7OeBQHKNZkuulw5mkxvq8ZWZMiBSt2lCl2ZoUmoDgvpezH9a1ecZn_bE6N5z63mNd3TEM5xf9OYjwP5L1aYfIUHwVRk.webp?r=a1d'
    , 'https://occ-0-806-1167.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABZozzIT6Q0pVlthNws4VrbZeIKWGfV6eWcP4YVbwVVEMzeuY2bSeoB6nKamHfWzvrJp1drx1qIEdvSbBTLUN0n3veIE2IPUG5q4.webp?r=bd5'
    , 'https://occ-0-806-1167.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABTPyRHNSW1vw5AqBh9hg7X8rE-JaLnb6lmFkrPjgbeus8F0GY0Iu31HEL7RlmA2LnOrO6nXGBRe0l-NL0umjWtqh6P0_Atv9PJY8KHSyv7_14y-TtWXpP9km8pM0xeYk315_TDZ7pxhT7JCpRxu6PsQxXIje9O7kzEP6jp5mLz7399-ySoCPLOpdrwXyQry-pQkSFgPpagoukslnXwDVWiOv56bu92IbYnvBW87625nYIlgb9n3wXobtXc7jhjDFfpG6lfTvreMkosAnVZCDFdXULXDwm_YtneW2CD3Y7lIfoc9N-gGl_um7xyqTiPyH_aWXhtjB5olIE2uGGo50TaUHZMMsbP5Rsd61ilqapJfgDj9y86TyEXGZsp2FROGKvJFBbgXpnTHC1Hh7h2gga8v5fbJMsGxkadAn2LBy0UDobw.webp?r=651'
    , 'https://occ-0-806-1167.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABXlXCMOTFlWrId9A1zdjQ2kvR6_LZM-l7XlE2RqBfOebIVvjv1hQZsF0D5v5RwsQRJ1S_goxExM26_OgwniXTs3rGpcnM_ok9hg.webp?r=6ba'
    , 'https://occ-0-806-1167.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABQ6uJ_wWbpU25vg2Ksdi16uQMhaCFipH7mb-Mtbk_53_oypoCRRcliFM3FZ1VqQ-pB1T9gsYapa0_JANV6jYOehTfAIWbAxtmH6ozynCLm5PcNgJyC8eRSR9CM-l8nVcI2bd.jpg?r=6f1',
    'https://occ-0-806-1167.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABUR_Pc_kNQ493x6Gy-lKVJcbdEYs5UEkjGRe4jDxGJCu1oj3kDVNl5Vz2M0ebeC5mQO3MQykGJiZ89q7SbbX1-WaCzADWJz-MhhUdR1hbweCdmT_Fz_Yx1Zl141az8WUbCWa.jpg?r=1b9']);


let row6 = new sliderRow("Watch It Again", [
    'https://occ-0-806-1167.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABZozzIT6Q0pVlthNws4VrbZeIKWGfV6eWcP4YVbwVVEMzeuY2bSeoB6nKamHfWzvrJp1drx1qIEdvSbBTLUN0n3veIE2IPUG5q4.webp?r=bd5'
    , 'https://occ-0-806-1167.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABTiHlsf6iXaiHKCumhnlgaOQnptPC8boWTyRR8-gsHzG2Vf-cVDk6EdjcNyCwfoUlgm6FiXYRt-hspG4BdUoLlU1QYRK3Ayjr1vw4gqIxTcjYXbByOIpp9-VXyXiMDMXZt_p.jpg?r=82d'
    , 'https://occ-0-806-1167.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABSEZGD0jRyy0tH0Mm44X9fV-9sLrpWa8NVxUwOwyF0PlQa8tjHva3F_T3aRe8A2dInE94Tzpy6-Q3onNSKj-mBlKVVIKSXxjyjI.webp?r=021'
    , 'https://occ-0-806-1167.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABQFPFTt9Bqz0DJ9lt7it2aAtS5ndml8ARoM7vdgtu748Fy8JzKu--4pjWBZRd_LmZRr0Zsxbvi3qJWraNLYIfxdjaRRrpBGz1Z6FDJy4r0DAtPp0GF_OAU4Gz72x4SlDar6D.jpg?r=fa7'
    , 'https://occ-0-806-1167.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABQ6uJ_wWbpU25vg2Ksdi16uQMhaCFipH7mb-Mtbk_53_oypoCRRcliFM3FZ1VqQ-pB1T9gsYapa0_JANV6jYOehTfAIWbAxtmH6ozynCLm5PcNgJyC8eRSR9CM-l8nVcI2bd.jpg?r=6f1'
    , 'https://occ-0-806-1167.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABVanRRU0SxKVbE451pr8Yo3kdFgFIkrPrxtodxhBcAXTpVaBXSk1zAOZrPIGs_i2Ao2zhzxCtGSIUN2O6FMlX_XbYGGG7jBND5E.webp?r=452'
    , 'https://occ-0-806-1167.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABXGLLsxe7OeBQHKNZkuulw5mkxvq8ZWZMiBSt2lCl2ZoUmoDgvpezH9a1ecZn_bE6N5z63mNd3TEM5xf9OYjwP5L1aYfIUHwVRk.webp?r=a1d'
    , 'https://occ-0-806-1167.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABTPyRHNSW1vw5AqBh9hg7X8rE-JaLnb6lmFkrPjgbeus8F0GY0Iu31HEL7RlmA2LnOrO6nXGBRe0l-NL0umjWtqh6P0_Atv9PJY8KHSyv7_14y-TtWXpP9km8pM0xeYk315_TDZ7pxhT7JCpRxu6PsQxXIje9O7kzEP6jp5mLz7399-ySoCPLOpdrwXyQry-pQkSFgPpagoukslnXwDVWiOv56bu92IbYnvBW87625nYIlgb9n3wXobtXc7jhjDFfpG6lfTvreMkosAnVZCDFdXULXDwm_YtneW2CD3Y7lIfoc9N-gGl_um7xyqTiPyH_aWXhtjB5olIE2uGGo50TaUHZMMsbP5Rsd61ilqapJfgDj9y86TyEXGZsp2FROGKvJFBbgXpnTHC1Hh7h2gga8v5fbJMsGxkadAn2LBy0UDobw.webp?r=651'
    , 'https://occ-0-806-1167.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABVNbxy7FdzsYPE5_TFRPH7wwAGmx3Wfv4ds7q33nBQugA5_oenmdVFrqLwUHcACoA0w8438fz8cNIyY9U7mKvBrKhdF1yoiv-aMJDk9qOvtCE98vU1jV5WJjnmZD938CSoUH.jpg?r=c1c'
    , 'https://occ-0-806-1167.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABbDp7LDzf3Gp-BiXFs4IehcgKQP6Ijwln_5GiwrhPXUphNu7pKjIK5fXnWYxT_KbLZ4S99LZyIxftHhaO7pt4aBYhpZmt5ZKTlqPWTGM4iLvDRaUe3ys1bqTg_MiDMyFwC-P.jpg?r=35e']);


let allSliderRows = [row1, row2, row3, row4, row5, row6];

export default allSliderRows;