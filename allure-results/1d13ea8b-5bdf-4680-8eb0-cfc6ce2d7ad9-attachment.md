# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: window.spec.js >> Window handling
- Location: tests\window.spec.js:3:5

# Error details

```
Error: expect(page).toHaveURL(expected) failed

Expected: "https://www.flipkart/"
Received: "https://www.flipkart.com/"
Timeout:  5000ms

Call log:
  - Expect "soft toHaveURL" with timeout 5000ms
    12 × unexpected value "https://www.flipkart.com/"

```

```yaml
- img "Image"
- img "Image"
- link "Image Image":
  - /url: /flights-travel-uhp-at-store?marketplace=FKT
  - img "Image"
  - img "Image"
- img
- text: Location not set Select delivery location
- img
- banner:
  - button "Search for Products, Brands and More":
    - img "Search Icon"
  - textbox "Search for Products, Brands and More"
  - link "Login":
    - /url: /account/login?ret=/
    - img "Login"
    - text: Login
  - img "Chevron"
  - link "Login":
    - /url: /account/login?ret=/
  - link "More":
    - /url: "#"
  - img "Chevron"
  - link "Cart Cart":
    - /url: /viewcart?marketplace=FLIPKART
    - img "Cart"
    - text: Cart
- link "For You":
  - /url: https://www.flipkart.com/
  - img
  - text: For You
- link "Fashion":
  - /url: /aw-base-new-inline-2025-at-store
  - img
  - text: Fashion
- link "Mobiles":
  - /url: /mobile-phones-store
  - img
  - text: Mobiles
- link "Beauty":
  - /url: /bpc-bau-new-inline-at-store
  - img
  - text: Beauty
- link "Electronics":
  - /url: /new-elec-clp-march-at-store
  - img
  - text: Electronics
- link "Home":
  - /url: /home-kitchen-25-at-store
  - img
  - text: Home
- link "Appliances":
  - /url: /tv-and-appliances-inline-ab-at-store
  - img
  - text: Appliances
- link "Toys, baby..":
  - /url: /toys-baby-2025-new-at-store
  - img
  - text: Toys, baby..
- link "Food & Health":
  - /url: /fnhc-2025-new-at-store
  - img
  - text: Food & Health
- link "Auto Accessories":
  - /url: /aa-2025-new-at-store
  - img
  - text: Auto Accessories
- link "2 Wheelers":
  - /url: /twowheelers-at-store
  - img
  - text: 2 Wheelers
- link "Sports & Fitness":
  - /url: /sf-inline-2025-at-store
  - img
  - text: Sports & Fitness
- link "Books & Media":
  - /url: /booksmedia-2025-at-store
  - img
  - text: Books & Media
- link "Furniture":
  - /url: /india-ka-furniture-studio-inlines-at-store
  - img
  - text: Furniture
- text: "Early bird deals starts in 06 hrs : 12 min : 44 sec"
- link "Image":
  - /url: /goat-sale-store?param=106766&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiSUFEIiwidmFsdWVUeXBlIjoiU0lOR0xFX1ZBTFVFRCJ9fX19fQ%3D%3D&nnc=BRE1HIFOPCFL_IAD&BU=Mixed
  - img "Image"
- link "Image":
  - /url: /infinite-m3-at-store?ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiSUFEIiwidmFsdWVUeXBlIjoiU0lOR0xFX1ZBTFVFRCJ9fX19fQ%3D%3D&nnc=1FAR0G2N0PKA_IAD&BU=Mixed
  - img "Image"
- link "Image":
  - /url: /ai-nova-2-ultra-5g-black-128-gb/p/itm41a37f63787e9?pid=MOBHHUFDFHBPJJEG&marketplace=FLIPKART&lid=LSTMOBHHUFDFHBPJJEGD85TYH&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=0M4KBB0MM71H_AD&BU=Mixed
  - img "Image"
- link "Image":
  - /url: /6bo/b5g/~cs-pk1da1cpaa/pr?sid=6bo%2Cb5g&collection-tab-name=Associate+Sponsor&sort=price_asc&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=TAF2E84E3K95_AD&BU=Mixed
  - img "Image"
- link "Image":
  - /url: /vivo-t5-pro-5g-glacier-blue-128-gb/p/itma21e2e09d4493?pid=MOBHM4FZVHBWFRHM&marketplace=FLIPKART&lid=LSTMOBHM4FZVHBWFRHMUM8WSE&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=GII7IA5N4MD3_AD&BU=Mixed
  - img "Image"
- link "Image":
  - /url: /toys/tricycles-and-rideons/pr?sid=tng%2C2cz&p%5B%5D=facets.brand%255B%255D%3DMiss%2B%2526%2BChief&sort=recency_desc&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=L51UFV2XNTZD_AD&BU=Mixed
  - img "Image"
- link "Image":
  - /url: /ai-pulse-2-purple-64-gb/p/itmdc910ae2ff0c1?pid=MOBHKHPYQHGDVRTG&lid=LSTMOBHKHPYQHGDVRTGHKLHJJ&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=X7EXX0TNDHG2_AD&BU=Mixed
  - img "Image"
- link "Image":
  - /url: /beauty-and-grooming/~cs-fli9d0rbpn/pr?sid=g9b&collection-tab-name=Lakme+Sunscreen&pageCriteria=default&sort=recency_desc&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=CSLB69PFPVG2_AD&BU=Mixed
  - img "Image"
- link "Image":
  - /url: /reh/plk/tvv/~cs-8wx7y4kfr7/pr?sid=reh%2Cplk%2Ctvv&collection-tab-name=Trolley+Bags&pageCriteria=default&p%5B%5D=facets.brand%255B%255D%3DHRX&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=15ALW6YKTBAT_AD&BU=Mixed
  - img "Image"
- link "Image":
  - /url: /boltt-smartphone-coming-soon-ads-at-store?ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=MPWO95E8GHD3_AD&BU=Mixed
  - img "Image"
- img "Image"
- text: Widest collection
- link "Image Specials Under ₹399":
  - /url: /all/~cs-6e6abde0b10ada8e95b3194f1e0724a1/pr?sid=4rr%2Ckm5%2Cipq&marketplace=FLIPKART&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InZhbHVlQ2FsbG91dCI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ2YWx1ZUNhbGxvdXQiLCJpbmZlcmVuY2VUeXBlIjoiVkFMVUVfQ0FMTE9VVCIsInZhbHVlcyI6WyJVbmRlciDigrkzOTkiXSwidmFsdWVUeXBlIjoiTVVMVElfVkFMVUVEIn19LCJwcmljZV9yYW5nZSI6eyJyYW5nZVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJwcmljZV9yYW5nZSIsImluZmVyZW5jZVR5cGUiOiJGQUNFVCIsIm1pbiI6bnVsbCwibWF4IjozOTkuMCwidmFsdWVUeXBlIjoiUkFOR0VfVkFMVUVEIn19LCJoZXJvUGlkIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6Imhlcm9QaWQiLCJpbmZlcmVuY2VUeXBlIjoiUElEIiwidmFsdWUiOiJBQ0NITVFSUFhYRUhNMzc1IiwidmFsdWVUeXBlIjoiU0lOR0xFX1ZBTFVFRCJ9fSwidGl0bGUiOnsibXVsdGlWYWx1ZWRBdHRyaWJ1dGUiOnsia2V5IjoidGl0bGUiLCJpbmZlcmVuY2VUeXBlIjoiVElUTEUiLCJ2YWx1ZXMiOlsiQ2FzZXMgJiBDb3ZlcnMiXSwidmFsdWVUeXBlIjoiTVVMVElfVkFMVUVEIn19fX19&BU=Mixed
  - img "Image"
  - text: Specials Under ₹399
- link "Image Popular Top Rated":
  - /url: /all/~cs-565bb897587d0582f3f41ba9581e0fb8/pr?sid=clo%2Cnyk%2Czp4&marketplace=FLIPKART&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InZhbHVlQ2FsbG91dCI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ2YWx1ZUNhbGxvdXQiLCJpbmZlcmVuY2VUeXBlIjoiVkFMVUVfQ0FMTE9VVCIsInZhbHVlcyI6WyJUb3AgUmF0ZWQiXSwidmFsdWVUeXBlIjoiTVVMVElfVkFMVUVEIn19LCJ0aXRsZSI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ0aXRsZSIsImluZmVyZW5jZVR5cGUiOiJUSVRMRSIsInZhbHVlcyI6WyJUb3AgUmF0ZWQiXSwidmFsdWVUeXBlIjoiTVVMVElfVkFMVUVEIn19LCJoZXJvUGlkIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6Imhlcm9QaWQiLCJpbmZlcmVuY2VUeXBlIjoiUElEIiwidmFsdWUiOiJUS1NHVVRZNFJKQU5GQTdNIiwidmFsdWVUeXBlIjoiU0lOR0xFX1ZBTFVFRCJ9fX19fQ%3D%3D&BU=Mixed
  - img "Image"
  - text: Popular Top Rated
- link "Image Most Loved Top Rated":
  - /url: /all/~cs-05668ad22c8fce75a520aa41beecc032/pr?sid=g9b%2Cema%2C5la%2Cjav&marketplace=FLIPKART&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InZhbHVlQ2FsbG91dCI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ2YWx1ZUNhbGxvdXQiLCJpbmZlcmVuY2VUeXBlIjoiVkFMVUVfQ0FMTE9VVCIsInZhbHVlcyI6WyJUb3AgUmF0ZWQiXSwidmFsdWVUeXBlIjoiTVVMVElfVkFMVUVEIn19LCJoZXJvUGlkIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6Imhlcm9QaWQiLCJpbmZlcmVuY2VUeXBlIjoiUElEIiwidmFsdWUiOiJGQ1dGTU5aSDRDQ0FaTkhTIiwidmFsdWVUeXBlIjoiU0lOR0xFX1ZBTFVFRCJ9fSwidGl0bGUiOnsibXVsdGlWYWx1ZWRBdHRyaWJ1dGUiOnsia2V5IjoidGl0bGUiLCJpbmZlcmVuY2VUeXBlIjoiVElUTEUiLCJ2YWx1ZXMiOlsiVG9wIFJhdGVkIl0sInZhbHVlVHlwZSI6Ik1VTFRJX1ZBTFVFRCJ9fX19fQ%3D%3D&BU=Mixed
  - img "Image"
  - text: Most Loved Top Rated
- link "Image Specials Min. 70% Off":
  - /url: /all/~cs-52421d5e45fb7e6543367c89c83fc1df/pr?sid=clo%2Cqfl%2Cwp7%2Czpk&marketplace=FLIPKART&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InZhbHVlQ2FsbG91dCI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ2YWx1ZUNhbGxvdXQiLCJpbmZlcmVuY2VUeXBlIjoiVkFMVUVfQ0FMTE9VVCIsInZhbHVlcyI6WyJNaW4uIDcwJSBPZmYiXSwidmFsdWVUeXBlIjoiTVVMVElfVkFMVUVEIn19LCJoZXJvUGlkIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6Imhlcm9QaWQiLCJpbmZlcmVuY2VUeXBlIjoiUElEIiwidmFsdWUiOiJWRVNIRlRHMlpKNFhSVk1aIiwidmFsdWVUeXBlIjoiU0lOR0xFX1ZBTFVFRCJ9fSwiZGlzY291bnRfcmFuZ2VfdjEiOnsicmFuZ2VWYWx1ZWRBdHRyaWJ1dGUiOnsia2V5IjoiZGlzY291bnRfcmFuZ2VfdjEiLCJpbmZlcmVuY2VUeXBlIjoiRkFDRVQiLCJtaW4iOjcwLjAsIm1heCI6bnVsbCwidmFsdWVUeXBlIjoiUkFOR0VfVkFMVUVEIn19LCJ0aXRsZSI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ0aXRsZSIsImluZmVyZW5jZVR5cGUiOiJUSVRMRSIsInZhbHVlcyI6WyJNZW4ncyBWZXN0cyJdLCJ2YWx1ZVR5cGUiOiJNVUxUSV9WQUxVRUQifX19fX0%3D&BU=Mixed
  - img "Image"
  - text: Specials Min. 70% Off
- img "Image"
- text: Interesting finds
- link "Image Men’s Sandals & Floaters Under ₹199":
  - /url: /mens-footwear/mens-sandals-floaters/pr?sid=osp%2Ccil%2Ce83&p%5B%5D=facets.price_range.from%3DMin&p%5B%5D=facets.price_range.to%3D199&hpid=CUJg85Dp-yR5oWAIP3TW1qp7_Hsxr70nj65vMAAFKlc%3D&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InZhbHVlQ2FsbG91dCI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ2YWx1ZUNhbGxvdXQiLCJpbmZlcmVuY2VUeXBlIjoiVkFMVUVfQ0FMTE9VVCIsInZhbHVlcyI6WyJVbmRlciDigrkxOTkiXSwidmFsdWVUeXBlIjoiTVVMVElfVkFMVUVEIn19LCJoZXJvUGlkIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6Imhlcm9QaWQiLCJpbmZlcmVuY2VUeXBlIjoiUElEIiwidmFsdWUiOiJTTkRIRjlQU0ZRSERSR0VVIiwidmFsdWVUeXBlIjoiU0lOR0xFX1ZBTFVFRCJ9fSwidGl0bGUiOnsibXVsdGlWYWx1ZWRBdHRyaWJ1dGUiOnsia2V5IjoidGl0bGUiLCJpbmZlcmVuY2VUeXBlIjoiVElUTEUiLCJ2YWx1ZXMiOlsiQ3JhenkgRGVhbCJdLCJ2YWx1ZVR5cGUiOiJNVUxUSV9WQUxVRUQifX19fX0%3D&BU=Mixed
  - img "Image"
  - text: Men’s Sandals & Floaters Under ₹199
- link "Image boAt, realme, Mivi & more Buy Now!":
  - /url: /audio-video/headset/pr?sid=0pm%2Cfcn&p%5B%5D=facets.connectivity%255B%255D%3DBluetooth&p%5B%5D=facets.price_range.from%3DMin&p%5B%5D=facets.price_range.to%3D1499&hpid=5TMxUngDAbKGfRIWoeK2z6p7_Hsxr70nj65vMAAFKlc%3D&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InZhbHVlQ2FsbG91dCI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ2YWx1ZUNhbGxvdXQiLCJpbmZlcmVuY2VUeXBlIjoiVkFMVUVfQ0FMTE9VVCIsInZhbHVlcyI6WyJCdXkgTm93ISJdLCJ2YWx1ZVR5cGUiOiJNVUxUSV9WQUxVRUQifX0sImhlcm9QaWQiOnsic2luZ2xlVmFsdWVBdHRyaWJ1dGUiOnsia2V5IjoiaGVyb1BpZCIsImluZmVyZW5jZVR5cGUiOiJQSUQiLCJ2YWx1ZSI6IkFDQ0dDNEdONVNRUjdaQ1oiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19LCJ0aXRsZSI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ0aXRsZSIsImluZmVyZW5jZVR5cGUiOiJUSVRMRSIsInZhbHVlcyI6WyJCbHVldG9vdGggSGVhZHBob25lcyJdLCJ2YWx1ZVR5cGUiOiJNVUxUSV9WQUxVRUQifX19fX0%3D&BU=Mixed
  - img "Image"
  - text: boAt, realme, Mivi & more Buy Now!
- link "Image Shop now From ₹299":
  - /url: /womens-ethnic-sets/pr?sid=clo%2Ccfv%2Citg%2Ctys&sort=popularity&p%5B%5D=facets.pattern%255B%255D%3DEmbroidered&p%5B%5D=facets.price_range.from%3D299&p%5B%5D=facets.price_range.to%3DMax&Param=54711&hpid=hHYMAnA4Ps7KRrEuOnW-fqp7_Hsxr70nj65vMAAFKlc%3D&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InZhbHVlQ2FsbG91dCI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ2YWx1ZUNhbGxvdXQiLCJpbmZlcmVuY2VUeXBlIjoiVkFMVUVfQ0FMTE9VVCIsInZhbHVlcyI6WyJGcm9tIOKCuTI5OSJdLCJ2YWx1ZVR5cGUiOiJNVUxUSV9WQUxVRUQifX0sImhlcm9QaWQiOnsic2luZ2xlVmFsdWVBdHRyaWJ1dGUiOnsia2V5IjoiaGVyb1BpZCIsImluZmVyZW5jZVR5cGUiOiJQSUQiLCJ2YWx1ZSI6IkVUSEhFSFpWU0hFWkVURlQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19LCJ0aXRsZSI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ0aXRsZSIsImluZmVyZW5jZVR5cGUiOiJUSVRMRSIsInZhbHVlcyI6WyJFbWJyb2lkZXJlZCBzZXRzIl0sInZhbHVlVHlwZSI6Ik1VTFRJX1ZBTFVFRCJ9fX19fQ%3D%3D&BU=Mixed
  - img "Image"
  - text: Shop now From ₹299
- link "Image Milton, Cello & more From ₹129":
  - /url: /kitchen-cookware-serveware/water-bottles-flasks/pr?sid=upp%2C3t7&marketplace=FLIPKART&sort=popularity&p%5B%5D=facets.price_range.from%3D129&p%5B%5D=facets.price_range.to%3DMax&hpid=uBvWEo4NUmh0PT8_4P0PDap7_Hsxr70nj65vMAAFKlc%3D&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InZhbHVlQ2FsbG91dCI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ2YWx1ZUNhbGxvdXQiLCJpbmZlcmVuY2VUeXBlIjoiVkFMVUVfQ0FMTE9VVCIsInZhbHVlcyI6WyJGcm9tIOKCuTEyOSJdLCJ2YWx1ZVR5cGUiOiJNVUxUSV9WQUxVRUQifX0sImhlcm9QaWQiOnsic2luZ2xlVmFsdWVBdHRyaWJ1dGUiOnsia2V5IjoiaGVyb1BpZCIsImluZmVyZW5jZVR5cGUiOiJQSUQiLCJ2YWx1ZSI6IkJPVEhFWEg5Wkc4WEFKVE4iLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19LCJ0aXRsZSI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ0aXRsZSIsImluZmVyZW5jZVR5cGUiOiJUSVRMRSIsInZhbHVlcyI6WyJXYXRlciBCb3R0bGVzIl0sInZhbHVlVHlwZSI6Ik1VTFRJX1ZBTFVFRCJ9fX19fQ%3D%3D&BU=Mixed
  - img "Image"
  - text: Milton, Cello & more From ₹129
- text: Brands in Spotlight
- link "Image":
  - /url: /mivi-fort-sonic-900-soundbar-dual-subwoofers-dolby-audio-5-2-channel-w-bluetooth-soundbar/p/itm0f08e9b9a75b2?pid=ACCHE36MYXVCDHGH&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=NXY6OHERPEYD_AD&BU=Mixed
  - img "Image"
- link "Image":
  - /url: /mivi-fort-sonic-900-soundbar-dual-subwoofers-dolby-audio-5-2-channel-w-bluetooth-soundbar/p/itm0f08e9b9a75b2?pid=ACCHDYCG2YGBWHQF&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=YC8SFL7ZBEZ9_AD&BU=Mixed
  - img "Image"
- link "Image":
  - /url: /triggr-ultrabuds-n3-crisp-calling-50h-playtime-13mm-drivers-bassxpand-bluetooth-gaming/p/itm1b5bae86e255d?pid=ACCH85X8YSHEKTH5&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=OLBG5U5WUVOM_AD&BU=Mixed
  - img "Image"
- link "Image":
  - /url: /beauty-and-grooming/bath-shower/bath-essentials/bath-soap/pr?sid=g9b%2C5nz%2Cb1b%2Cyug&p%5B%5D=facets.brand%255B%255D%3DDOVE&sort=recency_desc&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=C0RBQ3TGAUCF_AD&BU=Mixed
  - img "Image"
- link "Image":
  - /url: /beauty-and-grooming/bath-shower/bath-essentials/body-wash/pr?sid=g9b%2C5nz%2Cb1b%2Cbwa&p%5B%5D=facets.brand%255B%255D%3DDOVE&sort=recency_desc&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=XJEALP4SY7HR_AD&BU=Mixed
  - img "Image"
- link "Image":
  - /url: /beauty-and-grooming/~cs-fli9d0rbpn/pr?sid=g9b&collection-tab-name=Lakme+Sunscreen&pageCriteria=default&sort=recency_desc&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=NPZ0WO8LNQ5D_AD&BU=Mixed
  - img "Image"
- img "Image"
- text: Fashion's Top Deals
- link:
  - /url: /offers-list/recommended-for-you?screen=dynamic&pk=contentTags%3DGCD_THEME_3~marketplace%3DFLIPKART~widgetType%3DdealCardV3~contentType%3DpersonalisedRecommendation%2FC5&marketplace=FLIPKART&BU=Mixed
  - img
- link "Image Men’s Slippers & Flip Flops Min. 70% Off":
  - /url: https://www.flipkart.com/all/~cs-79e42ad52149a075d0a3b31f35294baa/pr?sid=osp,cil,e1r&marketplace=FLIPKART&restrictLocale=true&BU=Mixed
  - img "Image"
  - text: Men’s Slippers & Flip Flops Min. 70% Off
- link "Image Men’s Casual Shoes Min. 70% Off":
  - /url: https://www.flipkart.com/all/~cs-28462d7669ffdf82990baaadbb6225e0/pr?sid=osp,cil,e1f&marketplace=FLIPKART&restrictLocale=true&BU=Mixed
  - img "Image"
  - text: Men’s Casual Shoes Min. 70% Off
- link "Image Men’s Sandals & Floaters Min. 70% Off":
  - /url: https://www.flipkart.com/all/~cs-7a04c87a03d025d968662615918edf2d/pr?sid=osp,cil,e83&marketplace=FLIPKART&restrictLocale=true&BU=Mixed
  - img "Image"
  - text: Men’s Sandals & Floaters Min. 70% Off
- link "Image Men’s Sports Shoes Min. 70% Off":
  - /url: https://www.flipkart.com/all/~cs-6f5af2c6fd4068ce713d184f1481cd2b/pr?sid=osp,cil,1cu&marketplace=FLIPKART&restrictLocale=true&BU=Mixed
  - img "Image"
  - text: Men’s Sports Shoes Min. 70% Off
- img "Image"
- text: Trends you may like
- link "Image SquareDial":
  - /url: https://www.flipkart.com/all/~cs-987cec0ef7e14feb8d541e419d35e0ad/pr?sid=r18,f13&marketplace=FLIPKART&BU=Mixed
  - img "Image"
  - text: SquareDial
- link "Image Bodycon":
  - /url: https://www.flipkart.com/all/~cs-a48a0419eb31a68a741abea6036fb841/pr?sid=clo,odx,maj,jhy&marketplace=FLIPKART&BU=Mixed
  - img "Image"
  - text: Bodycon
- link "Image BackPrint":
  - /url: https://www.flipkart.com/all/~cs-37ac0e123be42744edc6a0b350fdccc7/pr?sid=clo,ash,ank,edy&marketplace=FLIPKART&BU=Mixed
  - img "Image"
  - text: BackPrint
- link "Image MegaLashes":
  - /url: https://www.flipkart.com/all/~cs-b537c22ee48bc3fc040cbdd8b47eec6d/pr?sid=g9b,ffi,ttr,xbe&marketplace=FLIPKART&BU=Mixed
  - img "Image"
  - text: MegaLashes
- text: Featured Brands
- link "Image":
  - /url: /toys/tricycles-and-rideons/pr?sid=tng%2C2cz&p%5B%5D=facets.brand%255B%255D%3DMiss%2B%2526%2BChief&sort=recency_desc&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=H74UO80I3ZA4_AD&BU=Mixed
  - img "Image"
- link "Image":
  - /url: /air-conditioners/~cs-kn0ixwopnr/pr?sid=j9e%2Cabm%2Cc54&collection-tab-name=Motorola+New+Launched+ACs&pageCriteria=default&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=KQ2ABWZJZGTB_AD&BU=Mixed
  - img "Image"
- text: Hang on, loading content Flipkart - Your go-to place for Online Shopping +
- contentinfo:
  - text: ABOUT
  - link "Contact Us":
    - /url: /helpcentre?otracker=footer_navlinks
  - link "About Us":
    - /url: https://corporate.flipkart.net/corporate-home
  - link "Careers":
    - /url: https://www.flipkartcareers.com/?otracker=footer_navlinks
  - link "Flipkart Stories":
    - /url: http://stories.flipkart.com/?otracker=footer_navlinks
  - link "Press":
    - /url: http://stories.flipkart.com/category/top-stories/news/
  - link "Corporate Information":
    - /url: /corporate-information
  - text: GROUP COMPANIES
  - link "Myntra":
    - /url: https://www.myntra.com/
  - link "Cleartrip":
    - /url: https://www.cleartrip.com/
  - link "Shopsy":
    - /url: https://www.shopsy.in
  - text: HELP
  - link "Payments":
    - /url: /pages/payments
  - link "Shipping":
    - /url: /pages/shipping
  - link "Cancellation & Returns":
    - /url: /helpcentre?catalog=55c9c6edb000002e002c1701&view=CATALOG
  - link "FAQ":
    - /url: /helpcentre?catalog=55c9c8e2b0000023002c1702&view=CATALOG
  - text: CONSUMER POLICY
  - link "Cancellation & Returns":
    - /url: /pages/returnpolicy?otracker=footer_navlinks
  - link "Terms Of Use":
    - /url: /pages/terms?otracker=footer_navlinks
  - link "Security":
    - /url: /pages/paymentsecurity?otracker=footer_navlinks
  - link "Privacy":
    - /url: /pages/privacypolicy?otracker=footer_navlinks
  - link "Sitemap":
    - /url: /sitemap?otracker=footer_navlinks
  - link "Grievance Redressal":
    - /url: /pages/grievance-redressal-mechanism?otracker=footer_navlinks
  - link "EPR Compliance":
    - /url: /pages/ewaste-compliance-tnc?otracker=footer_navlinks
  - link "FSSAI Food Safety Connect App":
    - /url: https://fssai.gov.in/cms/food-safety-connect.php
  - text: "Mail Us:"
  - paragraph: Flipkart Internet Private Limited,
  - paragraph: Buildings Alyssa, Begonia &
  - paragraph: Clove Embassy Tech Village,
  - paragraph: Outer Ring Road, Devarabeesanahalli Village,
  - paragraph: Bengaluru, 560103,
  - paragraph: Karnataka, India
  - text: "Social:"
  - link "Facebook":
    - /url: https://www.facebook.com/flipkart
    - img "Facebook"
  - link "Twitter":
    - /url: https://www.twitter.com/flipkart
    - img "Twitter"
  - link "YouTube":
    - /url: https://www.youtube.com/flipkart
    - img "YouTube"
  - link "Instagram":
    - /url: https://www.instagram.com/flipkart
    - img "Instagram"
  - text: "Registered Office Address:"
  - paragraph: Flipkart Internet Private Limited,
  - paragraph: Buildings Alyssa, Begonia &
  - paragraph: Clove Embassy Tech Village,
  - paragraph: Outer Ring Road, Devarabeesanahalli Village,
  - paragraph: Bengaluru, 560103,
  - paragraph: Karnataka, India
  - paragraph: "CIN : U51109KA2012PTC066107"
  - paragraph
  - paragraph:
    - text: "Telephone:"
    - link "044-45614700":
      - /url: tel:044-45614700
    - text: /
    - link "044-67415800":
      - /url: tel:044-67415800
  - img "Become a Seller"
  - link "Become a Seller":
    - /url: https://seller.flipkart.com/?utm_source=fkwebsite&utm_medium=websitedirect
  - img "Advertise"
  - text: Advertise
  - img "Gift Cards"
  - link "Gift Cards":
    - /url: /the-gift-card-store?otracker=footer_navlinks
  - img "Help Center"
  - link "Help Center":
    - /url: /helpcentre?otracker=footer_navlinks
  - text: © 2007-2026 Flipkart.com
  - img "Payment methods"
- contentinfo
- button "✕"
- text: Login
- paragraph: Get access to your Orders, Wishlist and Recommendations
- textbox
- text: Enter Email/Mobile number By continuing, you agree to Flipkart's
- link "Terms of Use":
  - /url: /pages/terms
- text: and
- link "Privacy Policy":
  - /url: /pages/privacypolicy
- text: .
- button "Request OTP"
- link "New to Flipkart? Create an account":
  - /url: /account/login?signup=true
```

# Test source

```ts
  1  | import {expect, test} from '@playwright/test'
  2  | 
  3  | test('Window handling',async({browser})=>{
  4  |     const context = await browser.newContext();
  5  |     const page = await context.newPage();
  6  |     await page.goto('https://www.flipkart.com');
> 7  |     await expect.soft(page).toHaveURL('https://www.flipkart')
     |                             ^ Error: expect(page).toHaveURL(expected) failed
  8  |     await page.getByRole('textbox',{name:'Search for Products, Brands and More'}).fill('mobiles');
  9  |     await page.keyboard.press('Enter');
  10 |     
  11 |     const [newtab] = await Promise.all([
  12 |         context.waitForEvent('page'),
  13 |         page.click('//div[contains(text(),"F70e 5G")]')
  14 |     ])
  15 |     await newtab.waitForLoadState();
  16 |     // await newtab.getByRole('button',{name:'Buy now'}).click();
  17 |     await newtab.getByText('Buy now').click();
  18 |     console.log(await newtab.title());
  19 | 
  20 |     // await expect.soft(newtab).toHaveTitle('Samsung Galaxy F70e 5G') 
  21 |     // await expect.soft(newtab).toHaveURL('') 
  22 |     await page.bringToFront();
  23 |     await newtab.waitForTimeout(4000)
  24 | 
  25 | })
  26 | 
  27 | test('Assertions',async({page})=>{
  28 |     
  29 |     await page.goto('https://demoqa.com/text-box')
  30 |     // await expect(page.getByRole('button',{name:'Submit'})).toBeEnabled();
  31 |     // await expect(page.getByRole('button',{name:'Submit'})).toBeVisible();
  32 |     await expect(page.getByRole('button',{name:'Submit'})).not.toBeDisabled();
  33 |     await expect(page.getByRole('button',{name:'Submit'})).not.toBeHidden()
  34 |     await expect(page.locator('#userName-label')).toHaveText('Full Na');
  35 |     await page.pause();
  36 |     await expect(page.locator('#userName-label')).toContainText('Full')
  37 | 
  38 | })
```