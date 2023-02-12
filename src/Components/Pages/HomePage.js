import React from 'react';
import { Container } from 'react-bootstrap';
import Scorecard from '../Scorecard/Scorecard';
import TestComp from '../testComp';

function HomePage() {

    let sampleData = {
      "id": 3,
      "name": "Chambers Bay",
      "teeboxes": [
        {
          "id": 10,
          "courseId": 3,
          "name": "Champion Tee",
          "par": 72,
          "slope": 139,
          "rating": 74.3,
          "yardage": 7197,
          "yardageIn": 3487,
          "yardageOut": 3710,
          "parIn": 36,
          "parOut": 36,
          "holes": [
            {
              "id": 163,
              "teeboxId": 10,
              "holeNumber": 1,
              "par": 4,
              "yardage": 483,
              "handicap": 3
            },
            {
              "id": 164,
              "teeboxId": 10,
              "holeNumber": 2,
              "par": 4,
              "yardage": 390,
              "handicap": 15
            },
            {
              "id": 165,
              "teeboxId": 10,
              "holeNumber": 3,
              "par": 3,
              "yardage": 194,
              "handicap": 17
            },
            {
              "id": 166,
              "teeboxId": 10,
              "holeNumber": 4,
              "par": 5,
              "yardage": 506,
              "handicap": 11
            },
            {
              "id": 167,
              "teeboxId": 10,
              "holeNumber": 5,
              "par": 4,
              "yardage": 476,
              "handicap": 7
            },
            {
              "id": 168,
              "teeboxId": 10,
              "holeNumber": 6,
              "par": 4,
              "yardage": 469,
              "handicap": 9
            },
            {
              "id": 169,
              "teeboxId": 10,
              "holeNumber": 7,
              "par": 4,
              "yardage": 417,
              "handicap": 1
            },
            {
              "id": 170,
              "teeboxId": 10,
              "holeNumber": 8,
              "par": 5,
              "yardage": 557,
              "handicap": 5
            },
            {
              "id": 171,
              "teeboxId": 10,
              "holeNumber": 9,
              "par": 3,
              "yardage": 218,
              "handicap": 13
            },
            {
              "id": 172,
              "teeboxId": 10,
              "holeNumber": 10,
              "par": 4,
              "yardage": 393,
              "handicap": 10
            },
            {
              "id": 173,
              "teeboxId": 10,
              "holeNumber": 11,
              "par": 4,
              "yardage": 482,
              "handicap": 2
            },
            {
              "id": 174,
              "teeboxId": 10,
              "holeNumber": 12,
              "par": 4,
              "yardage": 291,
              "handicap": 16
            },
            {
              "id": 175,
              "teeboxId": 10,
              "holeNumber": 13,
              "par": 5,
              "yardage": 428,
              "handicap": 4
            },
            {
              "id": 176,
              "teeboxId": 10,
              "holeNumber": 14,
              "par": 4,
              "yardage": 479,
              "handicap": 8
            },
            {
              "id": 177,
              "teeboxId": 10,
              "holeNumber": 15,
              "par": 3,
              "yardage": 169,
              "handicap": 18
            },
            {
              "id": 178,
              "teeboxId": 10,
              "holeNumber": 16,
              "par": 4,
              "yardage": 401,
              "handicap": 12
            },
            {
              "id": 179,
              "teeboxId": 10,
              "holeNumber": 17,
              "par": 3,
              "yardage": 248,
              "handicap": 14
            },
            {
              "id": 180,
              "teeboxId": 10,
              "holeNumber": 18,
              "par": 5,
              "yardage": 596,
              "handicap": 6
            }
          ]
        },
        {
          "id": 11,
          "courseId": 3,
          "name": "Men Tee",
          "par": 72,
          "slope": 130,
          "rating": 71.9,
          "yardage": 6809,
          "yardageIn": 3351,
          "yardageOut": 3458,
          "parIn": 36,
          "parOut": 36,
          "holes": [
            {
              "id": 181,
              "teeboxId": 11,
              "holeNumber": 1,
              "par": 4,
              "yardage": 445,
              "handicap": 3
            },
            {
              "id": 182,
              "teeboxId": 11,
              "holeNumber": 2,
              "par": 4,
              "yardage": 368,
              "handicap": 15
            },
            {
              "id": 183,
              "teeboxId": 11,
              "holeNumber": 3,
              "par": 3,
              "yardage": 179,
              "handicap": 17
            },
            {
              "id": 184,
              "teeboxId": 11,
              "holeNumber": 4,
              "par": 5,
              "yardage": 480,
              "handicap": 11
            },
            {
              "id": 185,
              "teeboxId": 11,
              "holeNumber": 5,
              "par": 4,
              "yardage": 452,
              "handicap": 7
            },
            {
              "id": 186,
              "teeboxId": 11,
              "holeNumber": 6,
              "par": 4,
              "yardage": 422,
              "handicap": 9
            },
            {
              "id": 187,
              "teeboxId": 11,
              "holeNumber": 7,
              "par": 4,
              "yardage": 400,
              "handicap": 1
            },
            {
              "id": 188,
              "teeboxId": 11,
              "holeNumber": 8,
              "par": 5,
              "yardage": 523,
              "handicap": 5
            },
            {
              "id": 189,
              "teeboxId": 11,
              "holeNumber": 9,
              "par": 3,
              "yardage": 189,
              "handicap": 13
            },
            {
              "id": 190,
              "teeboxId": 11,
              "holeNumber": 10,
              "par": 4,
              "yardage": 375,
              "handicap": 10
            },
            {
              "id": 191,
              "teeboxId": 11,
              "holeNumber": 11,
              "par": 4,
              "yardage": 465,
              "handicap": 2
            },
            {
              "id": 192,
              "teeboxId": 11,
              "holeNumber": 12,
              "par": 4,
              "yardage": 301,
              "handicap": 16
            },
            {
              "id": 193,
              "teeboxId": 11,
              "holeNumber": 13,
              "par": 5,
              "yardage": 428,
              "handicap": 4
            },
            {
              "id": 194,
              "teeboxId": 11,
              "holeNumber": 14,
              "par": 4,
              "yardage": 453,
              "handicap": 8
            },
            {
              "id": 195,
              "teeboxId": 11,
              "holeNumber": 15,
              "par": 3,
              "yardage": 161,
              "handicap": 18
            },
            {
              "id": 196,
              "teeboxId": 11,
              "holeNumber": 16,
              "par": 4,
              "yardage": 374,
              "handicap": 12
            },
            {
              "id": 197,
              "teeboxId": 11,
              "holeNumber": 17,
              "par": 3,
              "yardage": 217,
              "handicap": 14
            },
            {
              "id": 198,
              "teeboxId": 11,
              "holeNumber": 18,
              "par": 5,
              "yardage": 577,
              "handicap": 6
            }
          ]
        },
        {
          "id": 12,
          "courseId": 3,
          "name": "Senior Tee",
          "par": 72,
          "slope": 121,
          "rating": 69.5,
          "yardage": 6059,
          "yardageIn": 2973,
          "yardageOut": 3086,
          "parIn": 35,
          "parOut": 37,
          "holes": [
            {
              "id": 199,
              "teeboxId": 12,
              "holeNumber": 1,
              "par": 5,
              "yardage": 419,
              "handicap": 7
            },
            {
              "id": 200,
              "teeboxId": 12,
              "holeNumber": 2,
              "par": 4,
              "yardage": 302,
              "handicap": 11
            },
            {
              "id": 201,
              "teeboxId": 12,
              "holeNumber": 3,
              "par": 3,
              "yardage": 133,
              "handicap": 17
            },
            {
              "id": 202,
              "teeboxId": 12,
              "holeNumber": 4,
              "par": 5,
              "yardage": 442,
              "handicap": 5
            },
            {
              "id": 203,
              "teeboxId": 12,
              "holeNumber": 5,
              "par": 4,
              "yardage": 413,
              "handicap": 15
            },
            {
              "id": 204,
              "teeboxId": 12,
              "holeNumber": 6,
              "par": 4,
              "yardage": 376,
              "handicap": 9
            },
            {
              "id": 205,
              "teeboxId": 12,
              "holeNumber": 7,
              "par": 4,
              "yardage": 383,
              "handicap": 1
            },
            {
              "id": 206,
              "teeboxId": 12,
              "holeNumber": 8,
              "par": 5,
              "yardage": 460,
              "handicap": 3
            },
            {
              "id": 207,
              "teeboxId": 12,
              "holeNumber": 9,
              "par": 3,
              "yardage": 158,
              "handicap": 13
            },
            {
              "id": 208,
              "teeboxId": 12,
              "holeNumber": 10,
              "par": 4,
              "yardage": 355,
              "handicap": 8
            },
            {
              "id": 209,
              "teeboxId": 12,
              "holeNumber": 11,
              "par": 4,
              "yardage": 444,
              "handicap": 10
            },
            {
              "id": 210,
              "teeboxId": 12,
              "holeNumber": 12,
              "par": 4,
              "yardage": 282,
              "handicap": 12
            },
            {
              "id": 211,
              "teeboxId": 12,
              "holeNumber": 13,
              "par": 4,
              "yardage": 387,
              "handicap": 6
            },
            {
              "id": 212,
              "teeboxId": 12,
              "holeNumber": 14,
              "par": 4,
              "yardage": 416,
              "handicap": 2
            },
            {
              "id": 213,
              "teeboxId": 12,
              "holeNumber": 15,
              "par": 3,
              "yardage": 102,
              "handicap": 18
            },
            {
              "id": 214,
              "teeboxId": 12,
              "holeNumber": 16,
              "par": 4,
              "yardage": 297,
              "handicap": 14
            },
            {
              "id": 215,
              "teeboxId": 12,
              "holeNumber": 17,
              "par": 3,
              "yardage": 181,
              "handicap": 16
            },
            {
              "id": 216,
              "teeboxId": 12,
              "holeNumber": 18,
              "par": 5,
              "yardage": 509,
              "handicap": 4
            }
          ]
        },
        {
          "id": 13,
          "courseId": 3,
          "name": "Women Tee",
          "par": 72,
          "slope": 114,
          "rating": 63.2,
          "yardage": 5810,
          "yardageIn": 2915,
          "yardageOut": 2895,
          "parIn": 36,
          "parOut": 36,
          "holes": [
            {
              "id": 217,
              "teeboxId": 13,
              "holeNumber": 1,
              "par": 4,
              "yardage": 398,
              "handicap": 11
            },
            {
              "id": 218,
              "teeboxId": 13,
              "holeNumber": 2,
              "par": 4,
              "yardage": 330,
              "handicap": 9
            },
            {
              "id": 219,
              "teeboxId": 13,
              "holeNumber": 3,
              "par": 3,
              "yardage": 160,
              "handicap": 17
            },
            {
              "id": 220,
              "teeboxId": 13,
              "holeNumber": 4,
              "par": 5,
              "yardage": 360,
              "handicap": 5
            },
            {
              "id": 221,
              "teeboxId": 13,
              "holeNumber": 5,
              "par": 4,
              "yardage": 383,
              "handicap": 7
            },
            {
              "id": 222,
              "teeboxId": 13,
              "holeNumber": 6,
              "par": 4,
              "yardage": 335,
              "handicap": 13
            },
            {
              "id": 223,
              "teeboxId": 13,
              "holeNumber": 7,
              "par": 4,
              "yardage": 365,
              "handicap": 1
            },
            {
              "id": 224,
              "teeboxId": 13,
              "holeNumber": 8,
              "par": 5,
              "yardage": 430,
              "handicap": 3
            },
            {
              "id": 225,
              "teeboxId": 13,
              "holeNumber": 9,
              "par": 3,
              "yardage": 134,
              "handicap": 15
            },
            {
              "id": 226,
              "teeboxId": 13,
              "holeNumber": 10,
              "par": 4,
              "yardage": 339,
              "handicap": 8
            },
            {
              "id": 227,
              "teeboxId": 13,
              "holeNumber": 11,
              "par": 4,
              "yardage": 429,
              "handicap": 2
            },
            {
              "id": 228,
              "teeboxId": 13,
              "holeNumber": 12,
              "par": 4,
              "yardage": 251,
              "handicap": 14
            },
            {
              "id": 229,
              "teeboxId": 13,
              "holeNumber": 13,
              "par": 5,
              "yardage": 465,
              "handicap": 6
            },
            {
              "id": 230,
              "teeboxId": 13,
              "holeNumber": 14,
              "par": 4,
              "yardage": 384,
              "handicap": 10
            },
            {
              "id": 231,
              "teeboxId": 13,
              "holeNumber": 15,
              "par": 3,
              "yardage": 92,
              "handicap": 18
            },
            {
              "id": 232,
              "teeboxId": 13,
              "holeNumber": 16,
              "par": 4,
              "yardage": 334,
              "handicap": 12
            },
            {
              "id": 233,
              "teeboxId": 13,
              "holeNumber": 17,
              "par": 3,
              "yardage": 146,
              "handicap": 16
            },
            {
              "id": 234,
              "teeboxId": 13,
              "holeNumber": 18,
              "par": 5,
              "yardage": 475,
              "handicap": 4
            }
          ]
        }
      ]
    }


    return(
       <Container className='mt-5'>
            <h1>  Welcome to Public Golf! </h1>
            <p>Welcome to Public Golf - the open-source and publicly moderated database of golf courses. Our vision is to create a comprehensive and community-driven platform for golf course information that developers can easily integrate into their own projects. With an API that offers seamless access to our database, Public Golf makes it easy for developers to build custom applications, websites, and tools that leverage our rich and constantly updated content.</p>
            
            <h3>Why are we making Public Golf?</h3>
            <p>If you're a developer making a golf-related application, you'll know getting data on golf courses is hard. The data is either locked behind a paywall, out of date, or it's just wrong. Public Golf seeks to solve this by providing you, the developer, with all of the information you need for free! If there's something wrong with the data, feel free to change it with our user-friendly interface! </p> 
            
            <br></br>
            <h3> Current State of Public Golf </h3>
            <p> Currently our database and API are in development and not live quite yet. Below we have some locally stored data (from our own database! ) so you can begin to see what our user-interface might look like! Stay tuned for more updates.</p>
            
            {/* <TestComp /> */}
            <Scorecard course={sampleData} />

            <br className='mb-5'/>
            {/* <p>Our website is built with the latest web technologies, providing a solid foundation for developers to build upon. With a user-friendly interface and robust search capabilities, users can easily find the information they need. Our public moderation system ensures the quality of the information and keeps it up-to-date, while our API provides a simple and flexible way for developers to access this data.</p> */}
            {/* <p>Whether you're building a golf course booking platform, a golf club management system, or a mobile app for golf enthusiasts, Public Golf is the perfect partner. With our commitment to open-source development, we aim to provide a valuable resource for the developer community and enable the creation of innovative golf-related products.</p> */}
            {/* <p>So if you're a developer looking to take your golf-related project to the next level, look no further. Join us on our mission to make golf information accessible and useful for everyone. We look forward to seeing what you will build with Public Golf.</p> */}
            {/*  */}
       </Container>
    );
}


export default HomePage;

