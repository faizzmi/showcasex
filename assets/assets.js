import gymPic from '@/assets/gym.jpeg'
import hikingPic from '@/assets/hiking.jpeg'
import readingPic from '@/assets/reading.jpeg'

import header01 from '@/assets/project01/header01.png'
import f101 from '@/assets/project01/f101.png'
import f201 from '@/assets/project01/f201.jpeg'
import f301 from '@/assets/project01/f301.png'

import header02 from '@/assets/project02/foody.png'
import login from '@/assets/project02/login_foody.png'
import home from '@/assets/project02/home.png'
import restaurant from '@/assets/project02/restaurant.png'
import menu from '@/assets/project02/menu.png'
import menu_details from '@/assets/project02/menu_details.png'

import header03 from '@/assets/project03/header03.jpg'

import header04 from '@/assets/project04/Iphone.jpeg'
import home04 from '@/assets/project04/home.png'

import header05 from '@/assets/project05/paws.png'
import home05a from '@/assets/project05/home_paws02.png'
import home05b from '@/assets/project05/home_paws.png'

import header06 from '@/assets/project06/tt.png'

import header07 from '@/assets/project07/header.png'
import home07 from '@/assets/project07/Tribute-Page.png'

import header09 from '@/assets/project09/header.png'

import Id14 from '@/assets/project14/Id14.png'

export const project01 = {
    video: '/car_detection.mp4',
    headerImg: header01,
    feature: [ f101, f201, f301 ],
    highlight: []
};


export const project02 = {
    headerImg: header02,
    highlight: [ login, home, restaurant, menu, menu_details ]
};

export const project03 = {
    headerImg: header03,
};

export const project04 = {
    headerImg: header04,
    highlight: [ home04 ]
};

export const project05 = {
    headerImg: header05,
    highlight: [ home05a, home05b ]
};

export const project06 = {
    headerImg: header06
};

export const project07 = {
    headerImg: header07,
    highlight: [ home07, ]
};

export const project09 = {
    headerImg: header09
};

export const project14 = {
    video: '',
    descImg: Id14,
    headerImg: '',
    feature: [],
    highlight: []
};

export const hobbyPic = [
    {name: 'workout ⛹🏻', pic: gymPic},
    {name: 'hiking 🥾', pic: hikingPic},
    {name: 'reading 📖', pic: readingPic}
]