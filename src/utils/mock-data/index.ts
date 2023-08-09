export const tags: ITag[] = [
    {
      image:
        "https://firebasestorage.googleapis.com/v0/b/heypay-e9f1f.appspot.com/o/food%2Fnoodles-svgrepo-com%202.svg_1657125918230?alt=media&token=06ae207d-6f03-4e55-a1ac-e4e725b34acf",
      name: "Pounded Yam",
    },
    {
      image:
        "https://firebasestorage.googleapis.com/v0/b/heypay-e9f1f.appspot.com/o/food%2Fpasta-svgrepo-com%201.svg_1657126023636?alt=media&token=7d56c084-109c-4976-8716-8e1e455b73e6",
      name: "Spaghetti",
    },
    {
      image:
        "https://firebasestorage.googleapis.com/v0/b/heypay-e9f1f.appspot.com/o/food%2Fchicken-christmas-food-svgrepo-com%201.svg_1657123972810?alt=media&token=6258348f-0c78-4df0-a15b-f1f1813fb042",
      name: "Chicken",
    },
    {
      image:
        "https://firebasestorage.googleapis.com/v0/b/heypay-e9f1f.appspot.com/o/food%2Fjuice-svgrepo-com%202.svg_1657125631077?alt=media&token=7c8056d4-400a-4ed2-b88e-e456458769cb",
      name: "Juice",
    },
    {
      image:
        "https://firebasestorage.googleapis.com/v0/b/heypay-e9f1f.appspot.com/o/food%2Fice-cream-svgrepo-com%20(1)%201.svg_1657125237440?alt=media&token=2702f233-e7e5-43e1-9324-84f6d11901a7",
      name: "Ice Cream",
    },
    {
      image:
        "https://firebasestorage.googleapis.com/v0/b/heypay-e9f1f.appspot.com/o/food%2Ffrench-fries-svgrepo-com%202.svg_1657123642089?alt=media&token=1e069634-295b-4bdb-b0ca-ca980127363d",
      name: "Fries",
    },
    {
      image:
        "https://firebasestorage.googleapis.com/v0/b/heypay-e9f1f.appspot.com/o/food%2Fdoughnut-svgrepo-com%201.svg_1657124741318?alt=media&token=b023bd80-983b-4bf1-8d95-3ba8a01b6e52",
      name: "Doughnuts",
    },
    {
      image:
        "https://firebasestorage.googleapis.com/v0/b/heypay-e9f1f.appspot.com/o/food%2Fburger-svgrepo-com%202.svg_1657122987363?alt=media&token=ae88b275-a3d9-43b1-8baf-a0e430a57a1d",
      name: "Burger",
    },
    {
      image:
        "https://firebasestorage.googleapis.com/v0/b/heypay-e9f1f.appspot.com/o/food%2Ffast-food-burger-svgrepo-com%202.svg_1657124812917?alt=media&token=d5f00823-8f3a-4085-8edd-76c161fb9618",
      name: "Fastfood",
    },
    {
      image:
        "https://firebasestorage.googleapis.com/v0/b/heypay-e9f1f.appspot.com/o/food%2Fsandwich-svgrepo-com%201.svg_1657126527119?alt=media&token=05b985e0-9228-436a-971c-9f168289005f",
      name: "Sandwich",
    },
    {
      image:
        "https://firebasestorage.googleapis.com/v0/b/heypay-e9f1f.appspot.com/o/food%2Fsoup-svgrepo-com%201.svg_1657126696679?alt=media&token=1a7a0734-e08a-4eef-8554-03f014210b7a",
      name: "Soup bowl",
    },
    {
      name: "Goat Meat",
      image:
        "https://firebasestorage.googleapis.com/v0/b/heypay-e9f1f.appspot.com/o/food%2Fmeat-on-bone-svgrepo-com%201.svg_1657125800626?alt=media&token=ec420ff7-afe9-4a04-8dc4-d82d8e2b39fc",
    },
    {
      image:
        "https://firebasestorage.googleapis.com/v0/b/heypay-e9f1f.appspot.com/o/food%2Fburrito-svgrepo-com%201.svg_1657123337321?alt=media&token=b0db6e73-057f-4040-b106-347f8f32a49d",
      name: "Shawarma",
    },
    {
      image:
        "https://firebasestorage.googleapis.com/v0/b/heypay-e9f1f.appspot.com/o/food%2Fsausage-meat-svgrepo-com%201.svg_1657126581944?alt=media&token=1450cb6c-4ee8-4110-a9a9-396306bf87d1",
      name: "Grills",
    },
    {
      image:
        "https://firebasestorage.googleapis.com/v0/b/heypay-e9f1f.appspot.com/o/food%2Fpizza-svgrepo-com%201.svg_1657126266919?alt=media&token=b0659e3e-1aa8-42ed-8849-93cf927180bc",
      name: "Pizza",
    },
  ];

  export interface IStore {
    name: string;
    image: string;
    rating: number;
    menu: string[];
    no_of_ratings: number;
    opening_time: number;
    closing_time: number;
    free_delivery_price?: number;
    order_time?: number;
    manages_delivery?: boolean;
    is_taking_order: boolean;
  }

  // 
// app.get("/" , async(  req: Request ,res: Response, )=> {

//   const stores = [
//       {
//         name: "Iya Meta - Bodija",
//         image:
//           "https://firebasestorage.googleapis.com/v0/b/heypay-e9f1f.appspot.com/o/food%2F2022-01-16_720x315.jpg?alt=media&token=148a4142-443d-43d2-87dd-a8bbb3a1c0fc",
//         rating: 4,
//         no_of_ratings: 2050,
//         opening_time: 10,
//         closing_time: Infinity,
//         joined: 1672527600000,
//         menu: ["pounded yam", "chicken", "goat meat", "rice", "beans"]
//       },
//       {
//           name: "Nkwobi Village",
//           image: "https://firebasestorage.googleapis.com/v0/b/heypay-e9f1f.appspot.com/o/food%2FIMG_0660_1000x437.jpg?alt=media&token=c9ee5efa-0645-4282-8538-9894886ae11a",
//           rating: 3,
//           no_of_ratings: 1000,
//           opening_time: 6,
//           closing_time: 19,
//           is_taking_order: true,
//           order_time: 1,
//           joined: 1675206000000,
//         menu: ["Goat Meat", "Grills", ],
//       },
//       {
//           name: "The Place",
//           image: "https://firebasestorage.googleapis.com/v0/b/heyfood-558b4.appspot.com/o/vendor_images%2FWhatsApp%20Image%202023-05-19%20at%207_1071x468_9krn_FFMjzXVvzphyEVee.jpg?alt=media&token=3295b823-5cad-4469-8175-aff3bb250119",
//           rating: 4,
//           no_of_ratings: 5600,
//           opening_time: 9,
//           menu: ["Goat Meat", "Soup ", "Chicken", "Dodo"],
//           closing_time: Infinity,
//           is_taking_order: true,
//           joined:  1677625200000,

//       },
//       {
//           name: "Makinde SF Spag",
//           image: "https://firebasestorage.googleapis.com/v0/b/heyfood-558b4.appspot.com/o/vendor_images%2F00500-Spaghetti-thumb4-Bao_1600x700_xbNu1UArqZnnTqHVD2ENk.jpg?alt=media&token=a278b3d9-af1d-47dd-99cf-e8d5af5201bf",
//           rating: 4,
//           no_of_ratings: 5550,
//           opening_time: 10,
//           closing_time: 20,
//           is_taking_order: true,
//           order_time: 1,
//           joined: 1680303600000,
//           menu: ["Spaghetti", "Chicken", "Juice", "Ice Cream"],
//       },
//       {
//           name: "Fasty!!",
//           image: "https://firebasestorage.googleapis.com/v0/b/heyfood-558b4.appspot.com/o/vendor_images%2FWhatsApp%20Image%202023-07-07%20at%205_1023x447_VzNDzNlb2T9qzBCsakI6G.jpg?alt=media&token=702d0802-3bdd-4fd5-8921-cc7c1fa77c45",
//           rating: 4,
//           no_of_ratings: 3500,
//           opening_time: 10,
//           manages_delivery: true,
//           closing_time: 6,
//           is_taking_order: true,
//           joined: 1682895600000,
//           menu: ["Doughnuts",  "Sandwich","Shawarma",  "Pizza"],
//       }
        
   
//     ] as any[];

//     const _stores = stores.map( ( _ )=> ({ ..._,_menu: _.menu.map( (__ : any)=> __.toLocaleLowerCase() ).join(" , "), menu: _.menu.map(( __: any )=> __.toLocaleLowerCase() )}))

//     await Store.insertMany(_stores);

//     res.send("It is done")

// })

  export const stores: IStore[] = [
    {
      name: "Iya Merin - Bodija",
      image:
        "https://firebasestorage.googleapis.com/v0/b/heypay-e9f1f.appspot.com/o/food%2F2022-01-16_720x315.jpg?alt=media&token=148a4142-443d-43d2-87dd-a8bbb3a1c0fc",
      rating: 4,
      no_of_ratings: 350,
      opening_time: 10,
      closing_time: 18,
      is_taking_order: true,
      order_time: 1,
      menu: ["African", "Rice", "Chicken", "Dodo"],
    },
    {
        name: "Iya Merin",
        image: "https://firebasestorage.googleapis.com/v0/b/heypay-e9f1f.appspot.com/o/food%2F2022-01-16_720x315.jpg?alt=media&token=148a4142-443d-43d2-87dd-a8bbb3a1c0fc",
        rating: 4,
        no_of_ratings: 350,
        opening_time: 10,
        closing_time: 6,
        is_taking_order: true,
        order_time: 1,
      menu: ["African", "Rice", "Chicken", "Dodo"],
    },
    {
        name: "Iya Merin",
        image: "https://firebasestorage.googleapis.com/v0/b/heypay-e9f1f.appspot.com/o/food%2F2022-01-16_720x315.jpg?alt=media&token=148a4142-443d-43d2-87dd-a8bbb3a1c0fc",
        rating: 4,
        no_of_ratings: 350,
        opening_time: 10,
        menu: ["African", "Rice", "Chicken", "Dodo"],
        closing_time: 6,
        is_taking_order: true,
        order_time: 1,
    },
    {
        name: "Iya Merin",
        image: "https://firebasestorage.googleapis.com/v0/b/heypay-e9f1f.appspot.com/o/food%2F2022-01-16_720x315.jpg?alt=media&token=148a4142-443d-43d2-87dd-a8bbb3a1c0fc",
        rating: 4,
        no_of_ratings: 350,
        opening_time: 10,
        closing_time: 6,
        is_taking_order: true,
        order_time: 1,
        menu: ["African", "Rice", "Chicken", "Dodo"],
    },
    {
        name: "Iya Merin",
        image: "https://firebasestorage.googleapis.com/v0/b/heypay-e9f1f.appspot.com/o/food%2F2022-01-16_720x315.jpg?alt=media&token=148a4142-443d-43d2-87dd-a8bbb3a1c0fc",
        rating: 4,
        no_of_ratings: 350,
        opening_time: 10,
        closing_time: 6,
        is_taking_order: true,
        order_time: 1,
        menu: ["African", "Rice", "Chicken", "Dodo"],
    },
    {
        name: "Iya Merin",
        image: "https://firebasestorage.googleapis.com/v0/b/heypay-e9f1f.appspot.com/o/food%2F2022-01-16_720x315.jpg?alt=media&token=148a4142-443d-43d2-87dd-a8bbb3a1c0fc",
        rating: 4,
        no_of_ratings: 350,
        opening_time: 10,
        closing_time: 6,
        is_taking_order: true,
        order_time: 1,
        menu: ["African", "Rice", "Chicken", "Dodo"],
    },
    {
        name: "Iya Merin",
        image: "https://firebasestorage.googleapis.com/v0/b/heypay-e9f1f.appspot.com/o/food%2F2022-01-16_720x315.jpg?alt=media&token=148a4142-443d-43d2-87dd-a8bbb3a1c0fc",
        rating: 4,
        no_of_ratings: 350,
        opening_time: 10,
        closing_time: 6,
        is_taking_order: true,
        order_time: 1,
        menu: ["African", "Rice", "Chicken", "Dodo"],
    },
  ];
export interface ITag {
  name: string;
  image: string;
}
