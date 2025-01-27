import gymPic from '@/assets/gym.jpeg'
import hikingPic from '@/assets/hiking.jpeg'
import readingPic from '@/assets/reading.jpeg'
import header01 from '@/assets/project01/header01.png'
import f101 from '@/assets/project01/f101.png'
import f201 from '@/assets/project01/f201.jpeg'
import f301 from '@/assets/project01/f301.png'
import Id14 from '@/assets/project14/Id14.png'

export const project01 = {
    video: '/car_detection.mp4',
    headerImg: header01,
    feature: [ f101, f201, f301 ],
    highlight: []
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