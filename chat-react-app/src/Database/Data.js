 const Data={
    
    "profile": {
      "id": 1,
      "name": "Nikita",
      "picture": "https://image.ibb.co/k0wVTm/profile_pic.jpg",
      "status": "Available",
      "friends": [
        {
          "id": 2,
          "name": "Piyush",
          "picture": "https://i.ibb.co/HpB1d1P/dp.jpg",
          "latest_timestamp": "10:00",
          "lastChat":
            "Or maybe not, let me check logistics and call you. Give me sometime"
        },
        {
          "id": 3,
          "name": "John",
          "picture": "https://i.ibb.co/0C3Qtzm/bhuvnesh-kumar.jpg",
          "latest_timestamp": "12:30",
          "lastChat": "Alright"
        },
        {
          "id": 4,
          "name": "Luke",
          "picture": "https://image.ibb.co/jOzeUG/luke_1.jpg",
          "latest_timestamp": "4:12",
          "lastChat": "I will look into it"
        },
        {
          "id": 5,
          "name": "Bane",
          "picture": "https://i.ibb.co/6tmq1LT/Inderjeet.jpg",
          "latest_timestamp": "7:53",
          "lastChat": "Exactly my point!"
        },
        {
          "id": 6,
          "name": "Zach",
          "picture": "../",
          "latest_timestamp": "1:09",
          "lastChat": "Not quite the same."
        },
       
      ]
    },
    "friends": [
      {
        "id": 2,
        "name": "Aj Rathore",
        "picture": "https://cdn.pixabay.com/photo/2020/04/09/13/27/man-5021469_1280.jpg",
        "chatlog": [
          {
            "text": "Did you recieve the package I sent you the other day?",
            "timestamp": "10:00",
            "side": "left",
            "message_id": 1
          },
          {
            "text": "I believe they must have misplaced it elsewhere?!",
            "timestamp": "10:02",
            "side": "left",
            "message_id": 2
          },
          {
            "text":
              "Or maybe not, let me check logistics and call you. Give me sometime",
            "timestamp": "10:03",
            "side": "left",
            "message_id": 3
          },
          {
            "text":
              "All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet",
            "timestamp": "10:03",
            "side": "left",
            "message_id": 4
          },
          {
            "text":" Hi Developer ",
            "timestamp": '10:05',
            "side": "left",
            "message_id": 5
          }
          
        ]
      },
      {
        "id": 3,
        "name": "Ankush Sir",
        "picture": "https://mymodernmet.com/wp/wp-content/uploads/2019/09/100k-ai-faces-5.jpg",
        "chatlog": [
          {
            "text":
              "Sections 1.10.32 and 1.10.33 from 'de Finibus Bonorum et Malorum' by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham",
            "timestamp": "06:55",
            "side": "left",
            "message_id": 1
          },
          {
            "text":
              "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested",
            "timestamp": "06:58",
            "side": "left",
            "message_id": 2
          },
          {
            "text":
              "The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
            "timestamp": "07:00",
            "side": "left",
            "message_id": 3
          },
          {
            "text":
              "It uses a dictionary of over 200 Latin words",
            "timestamp": "07:05",
            "side": "left",
            "message_id": 4
          },
        ]
      },
      {
        "id": 5,
        "name": "Coding Ninjas",
        "picture": "data:image/jpeg;base64,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",
        "chatlog": [
          {
          "text": "Did You complete Full stack developer course",
          "timestamp": "07:05",
          },
          {
            "text": "yes",
            "timestamp": "11:52",
            }
        ]
      },
      {
        "id": 6,
        "name": "Nidhi Mem",
        "picture": "Images/channels4_profile.jpg",
        "chatlog": [
          {
            "text": "Hi, Arjun",
            "timestamp": "04:25",
            },
            {
              "text": "You have any issue regading your course?? If yes then pls feel free to reach out to me.",
              "timestamp": "05:55",
              }

        ]
      },
      {
        "id": 7,
        "name": "Jennifer",
        "picture": "data:image/jpeg;base64,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",
        "chatlog": [
          {
            "text": "Hi",
            "timestamp": "09:05",
            },
            {
              "text": "Who are You ??",
              "timestamp": "10:06",
              }
        ]
      },
      {
        "id": 8,
        "name": "Katie",
        "picture": "https://image.ibb.co/eLVWbw/katie_1.jpg",
        "chatlog": [
         
         
        ]
      },
      {
        "id": 9,
        "name": "Chloe",
        "picture": "https://image.ibb.co/ncAa3b/chloe_1.jpg",
        "chatlog": []
      },
      {
        "id": 10,
        "name": "Kennith",
        "picture": "https://image.ibb.co/fQKPww/kennith_1.jpg",
        "chatlog": []
      },
      {
        "id": 11,
        "name": "Tara",
        "picture": "https://image.ibb.co/dM6hib/tara_1.jpg",
        "chatlog": []
      },
      {
        "id": 12,
        "name": "Gary",
        "picture": "https://image.ibb.co/gsF8Ob/gary_1.jpg",
        "chatlog": []
      },
      {
        "id": 13,
        "name": "Zoey",
        "picture": "https://image.ibb.co/nd0Wbw/zoey_1.jpg",
        "chatlog": []
      },
      {
        "id": 14,
        "name": "Ash",
        "picture": "https://image.ibb.co/iasYpG/ash_1.jpg",
        "chatlog": []
      },
      {
        "id": 15,
        "name": "Zen",
        "picture": "https://image.ibb.co/eeqWbw/zen_1.jpg",
        "chatlog": []
      }
    ],
    "allFriends": [
      // {
      //   "id": 16,
      //   "name": "A'Koba",
      //   "picture": "",
      //   "status": "Available"
      // },
      {
        "id": 15,
        "name": "Zen",
        "picture": "https://image.ibb.co/eeqWbw/zen_1.jpg",
        "status": "Busy"
      },
      {
        "id": 14,
        "name": "Ash",
        "picture": "https://image.ibb.co/iasYpG/ash_1.jpg",
        "status": "Busy"
      },
      {
        "id": 13,
        "name": "Zoey",
        "picture": "https://image.ibb.co/nd0Wbw/zoey_1.jpg",
        "status": "Busy"
      },
      {
        "id": 12,
        "name": "Gary",
        "picture": "https://image.ibb.co/gsF8Ob/gary_1.jpg",
        "status": "Busy"
      },
      {
        "id": 11,
        "name": "Tara",
        "picture": "https://image.ibb.co/dM6hib/tara_1.jpg",
        "status": "Busy"
      },
      {
        "id": 10,
        "name": "Kennith",
        "picture": "https://image.ibb.co/fQKPww/kennith_1.jpg",
        "status": "Busy"
      },
      {
        "id": 9,
        "name": "Chloe",
        "picture": "https://image.ibb.co/ncAa3b/chloe_1.jpg",
        "status": "Busy"
      },
      {
        "id": 8,
        "name": "Katie",
        "picture": "https://image.ibb.co/eLVWbw/katie_1.jpg",
        "status": "Busy"
      },
      {
        "id": 7,
        "name": "Zach",
        "picture": "https://image.ibb.co/b4kxGw/zach_1.jpg",
        "status": "Busy"
      },
      {
        "id": 6,
        "name": "Darth Vader",
        "picture": "https://image.ibb.co/j4Ov3b/darth_vader_1.png",
        "status": "Busy"
      },
      {
        "id": 5,
        "name": "Bane",
        "picture": "https://image.ibb.co/cBZPww/bane_1.jpg",
        "status": "Busy"
      },
      {
        "id": 4,
        "name": "Luke",
        "picture": "https://image.ibb.co/jOzeUG/luke_1.jpg",
        "status": "Busy"
      },
      {
        "id": 3,
        "name": "Bob",
        "picture": "https://image.ibb.co/gSyTOb/bob_1.jpg",
        "status": "Busy"
      },
      {
        "id": 2,
        "name": "Alex",
        "picture": "https://i.ibb.co/HpB1d1P/dp.jpg",
        "status": "Busy"
      },
      
   
    ]
  }
  

  export default Data;