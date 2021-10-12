import {IUser} from "./shared/interfaces";

export const Users: IUser[] = [
  {
    id: 8,
    firstName: "Damon",
    lastName: 'Hall',
    phone: 380334325634,
    image: './assets/images/damon-hall-HuO-ITteuW4-unsplash.jpg',
    lastVisit: 'Sat Oct 09 2021 19:30:12 GMT+0300',
    chatingHistory:[
      {
        userId: 8,
        time: 'Sat Oct 09 2021 19:30:12 GMT+0300',
        text: "some test text"
      },{
        userId: 8,
        time: 'Sat Oct 09 2021 19:30:12 GMT+0300',
        text: "some test text2"
      },
      {
        userId: 0,
        time: 'Sat Oct 09 2021 19:30:12 GMT+0300',
        text: "some test text"
      },{
        userId: 8,
        time: 'Sat Oct 09 2021 19:30:12 GMT+0300',
        text: "some test text2"
      },
    ]
  },
  {
    id: 7,
    firstName: "Jonas",
    lastName: 'Kakaroto',
    phone: 380334325634,
    image: './assets/images/jonas-kakaroto-mjRwhvqEC0U-unsplash.jpg',
    lastVisit: 'Sat Oct 09 2021 19:30:12 GMT+0300',
    chatingHistory:[
      // {
      //   id: 1,
      //   userId: 1,
      //   time: 'Sat Oct 09 2021 19:30:12 GMT+0300',
      //   text: "some test text"
      // },{
      //   id: 2,
      //   userId: 11,
      //   time: 'Sat Oct 09 2021 19:30:12 GMT+0300',
      //   text: "some test text2"
      // },
    ]
  },
  {
    id: 1,
    firstName: "Aiony",
    lastName: 'Haust',
    phone: 380334325634,
    image: './assets/images/aiony-haust-3TLl_97HNJo-unsplash.jpg',
    lastVisit: 'Sat Oct 09 2021 19:30:12 GMT+0300',
    chatingHistory:[
      {
        userId: 1,
        time: 'Sat Oct 09 2021 19:30:12 GMT+0300',
        text: "some test text"
      },{
        userId: 0,
        time: 'Sat Oct 09 2021 19:30:12 GMT+0300',
        text: "some test text2"
      },
    ]
    },
   {
    id: 2,
    firstName: "Christopher",
    lastName: 'Campbell',
    phone: 380334325634,
     image: './assets/images/christopher-campbell-rDEOVtE7vOs-unsplash.jpg',
     lastVisit: 'Sat Oct 09 2021 19:30:12 GMT+0300',
     chatingHistory:[
       {
         userId: 2,
         time: 'Sat Oct 09 2021 19:30:12 GMT+0300',
         text: "some test text"
       },{
         userId: 0,
         time: 'Sat Oct 09 2021 19:30:12 GMT+0300',
         text: "some test text2"
       },
     ]
  },
  {
    id: 3,
    firstName: "Jeffery",
    lastName: 'Erhunse',
    phone: 380334325634,
    image: './assets/images/jeffery-erhunse-Z9lbmEjyYjU-unsplash.jpg',
    lastVisit: 'Sat Oct 09 2021 19:30:12 GMT+0300',
    chatingHistory:[
      {
        userId: 0,
        time: 'Sat Oct 09 2021 19:30:12 GMT+0300',
        text: "some test text"
      },{
        userId: 3,
        time: 'Sat Oct 09 2021 19:30:12 GMT+0300',
        text: "some test text2"
      },
    ]
  },
  {
    id: 4,
    firstName: "Raj",
    lastName: 'Rana',
    phone: 380334325634,
    image: './assets/images/raj-rana-15Vb4B_ma_s-unsplash.jpg',
    lastVisit: 'Sat Oct 09 2021 19:30:12 GMT+0300',
    chatingHistory:[
      {
        userId: 4,
        time: 'Sat Oct 09 2021 19:30:12 GMT+0300',
        text: "some test text"
      },{
        userId: 0,
        time: 'Sat Oct 09 2021 19:30:12 GMT+0300',
        text: "some test text2"
      },
    ]
  },
  {
    id: 5,
    firstName: "Sobhan",
    lastName: 'Joodi',
    phone: 380334325634,
    image: './assets/images/sobhan-joodi-PrXsOoAYqgg-unsplash.jpg',
    lastVisit: 'Sat Oct 09 2021 19:30:12 GMT+0300',
    chatingHistory:[
      {
        userId: 0,
        time: 'Sat Oct 09 2021 19:30:12 GMT+0300',
        text: "some test text"
      },{
        userId: 5,
        time: 'Sat Oct 09 2021 19:30:12 GMT+0300',
        text: "some test text2"
      },
    ]
  },
  {
    id: 6,
    firstName: "Sergio",
    lastName: 'De-paula',
    phone: 380334325634,
    image: './assets/images/sergio-de-paula-c_GmwfHBDzk-unsplash.jpg',
    lastVisit: 'Sat Oct 09 2021 19:30:12 GMT+0300',
    chatingHistory:[
      {
        userId: 6,
        time: 'Sat Oct 09 2021 19:30:12 GMT+0300',
        text: "some test text"
      },{
        userId: 0,
        time: 'Sat Oct 09 2021 19:30:12 GMT+0300',
        text: "some test text2"
      },
    ]
  },
];
