export const services=[
  {
    category:'Hair',
    services:[
      {
        name:'Signature Cut & Finish',
        price:'from R650',
        duration:'60 min',
        description:'Consultation, wash, scalp massage, precision cut and styling lesson.',
        tiers:[
          {label:'Junior Stylist',price:'R450'},
          {label:'Stylist',price:'R650'},
          {label:'Master Stylist',price:'R850',note:'Includes take-home gloss.'}
        ]
      },
      {
        name:'Lived-In Colour Ritual',
        price:'from R1,450',
        duration:'150 min',
        description:'Balayage, gloss, bond repair and blowout for dimensional, low-maintenance colour.',
        tiers:[
          {label:'Junior Stylist',price:'from R1,150'},
          {label:'Stylist',price:'from R1,450'},
          {label:'Master Stylist',price:'from R1,850'}
        ]
      },
      {name:'Cloud Curl + Cut',price:'R850',duration:'75 min',description:'Consultation, wash, signature curl-focused cut and cloud curl styling.'},
      {name:'Scalp Reset',price:'R650',duration:'60 min',description:'Targeted scalp cleanse, treatment ritual and blowout.'},
      {name:'Gloss Refresh',price:'from R550',duration:'45 min',description:'A quick colour refresh to restore shine and tone between major colour appointments.',addOn:true},
      {name:'Bond Repair',price:'from R350',duration:'30 min',description:'Targeted bond-care add-on for colour and chemically treated hair.',addOn:true}
    ]
  },
  {
    category:'Beauty',
    services:[
      {name:'Glass Skin Facial',price:'R750',duration:'60 min',description:'K-beauty inspired cleanse, exfoliation, hydration and glow-focused facial ritual.'},
      {name:'Express Facial',price:'R450',duration:'45 min',description:'Cleanse, exfoliate, mask and moisturise.',addOn:true},
      {name:'Brow Shape & Tint',price:'R280',duration:'30 min'}
    ]
  },
  {
    category:'Nails',
    services:[
      {name:'Gel Manicure',price:'R420',duration:'60 min'},
      {name:'Luxury Pedicure',price:'R520',duration:'75 min'}
    ]
  }
];