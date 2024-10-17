
export const NAV_LINKS = [
    {section: "CARDIO", path: '#cardio'},
    {section: "STRENGTH", path: '#strength'},
    {section: "MOBILITY", path: '#mobility'}
]

interface EquipmentProps { 
    name: string;
    image: string;  // URL or path to the image
    description: string;
  }
  
  export const CardioEquipment: EquipmentProps[] = [
    {
      name: "Treadmill",
      image: "/images/treadmill.png",  // Replace with the correct image path
      description: "The treadmill allows you to walk, jog, or run indoors, offering customizable speeds and incline levels for a varied workout. It's perfect for improving cardiovascular endurance and burning calories."
    },
    {
      name: "Exercise Bike",
      image: "/images/bike.png",  // Replace with the correct image path
      description: "An exercise bike provides a low-impact cardio workout that's easy on the joints. It strengthens your legs and improves cardiovascular health while being gentle on the body."
    },
    {
      name: "Elliptical Trainer",
      image: "/images/elliptical.png",  // Replace with the correct image path
      description: "The elliptical trainer offers a full-body, low-impact workout that targets both the upper and lower body. It improves cardiovascular health while minimizing stress on the joints."
    },
    {
      name: "Rowing Machine",
      image: "/images/rower.png",  // Replace with the correct image path
      description: "A rowing machine provides a full-body workout that strengthens your legs, core, and arms while improving cardiovascular endurance. It's a great low-impact option for burning calories and building strength."
    },
    {
      name: "Stair Climber",
      image: "/images/climber.png",  // Replace with the correct image path
      description: "The stair climber mimics the motion of climbing stairs, offering an intense workout that strengthens your legs and glutes while boosting cardiovascular fitness."
    },
    {
      name: "Skill Mill",
      image: "/images/skillmill.png",  // Replace with the correct image path
      description: "The Skill Mill is perfect for high-intensity interval training and functional workouts. Designed for versatile, non-motorized movement, it enhances cardiovascular endurance while building strength and power in both the lower and upper body."
    }
  ];

  
  export const MobilityEquipment: EquipmentProps[] = [
    {
      name: "Medicine Ball",
      image: "/images/medicine-balls.png",  // Replace with the correct image path
      description: "The medicine ball is great for functional training and improving overall strength and coordination. It can be used for a variety of exercises such as throws, slams, and twists."
    },
    {
      name: "Bosu Stability Ball",
      image: "/images/bosu-stability.png",  // Replace with the correct image path
      description: "The Bosu Stability Ball challenges your balance, engaging your core muscles and improving overall stability and coordination. It's perfect for rehabilitation, strength training, and cardio workouts."
    },
    {
      name: "Resistance Bands",
      image: "/images/resistance-bands.png",  // Replace with the correct image path
      description: "Resistance bands are versatile tools for strength training, rehabilitation, and flexibility exercises. They provide varying levels of resistance to work out different muscle groups."
    },
    {
      name: "Stackable Plyobox",
      image: "/images/stackable-plyobox.png",  // Replace with the correct image path
      description: "The stackable plyoboxes are perfect for plyometric training, such as box jumps, step-ups, and other explosive movements. They help improve speed, power, and agility."
    },
    {
      name: "Foam Roller",
      image: "/images/foam-roller.png",  // Replace with the correct image path
      description: "The foam roller is used for self-myofascial release to reduce muscle tightness, increase flexibility, and promote better muscle recovery after intense workouts."
    },
    {
      name: "Stability Ball",
      image: "/images/stability-ball.png",  // Replace with the correct image path
      description: "The stability ball is ideal for strengthening your core, improving balance, and enhancing flexibility. It can be incorporated into exercises like crunches, planks, and leg lifts."
    }
  ];
  

  export const StrengthEquipment: EquipmentProps[] = [
    {
      name: "Bench Press",
      image: "/images/bench-press.jpg",  // Replace with the correct image path
      description: "The bench press is a foundational weightlifting exercise that strengthens the chest, shoulders, and triceps. It's one of the most effective movements for building upper-body strength."
    },
    {
      name: "Barbell",
      image: "/images/barbell.jpg",  // Replace with the correct image path
      description: "A barbell is a versatile tool used for various weightlifting exercises like squats, deadlifts, and presses. It allows you to load heavy weights for strength and muscle building."
    },
    {
      name: "EZ-Bar",
      image: "/images/ez-bar.jpg",  // Replace with the correct image path
      description: "The EZ-bar is designed for comfort during curls and triceps exercises. Its angled shape reduces strain on the wrists, making it ideal for arm training."
    },
    {
      name: "Dumbbells",
      image: "/images/dumbbells.jpg",  // Replace with the correct image path
      description: "Dumbbells are perfect for strength training, allowing for greater range of motion and targeting individual muscles. They're versatile tools for a variety of upper and lower body exercises."
    },
    {
      name: "Plated Weights",
      image: "/images/weight-plates.jpg",  // Replace with the correct image path
      description: "Plated weights are used with barbells or standalone equipment to increase resistance. They are essential for progressing in strength training exercises."
    },
    {
      name: "Incline Plated Bench",
      image: "/images/incline-plated-press.jpg",  // Replace with the correct image path
      description: "The incline plated bench allows you to perform incline presses, which target the upper chest and shoulders. This bench is perfect for isolating the upper chest in pressing movements."
    },
    {
      name: "Leg Curl",
      image: "/images/leg-curl.jpg",  // Replace with the correct image path
      description: "The leg curl machine isolates and strengthens the hamstrings. It's an essential piece of equipment for lower body development and injury prevention."
    },
    {
      name: "Leg Press",
      image: "/images/leg-press.jpg",  // Replace with the correct image path
      description: "The leg press is a compound exercise machine that targets the quads, hamstrings, and glutes. It’s great for building lower body strength while minimizing stress on the lower back."
    },
    {
      name: "Leg Extension",
      image: "/images/leg-extension.jpg",  // Replace with the correct image path
      description: "The leg extension machine focuses on isolating and strengthening the quadriceps. It’s an excellent exercise for defining the muscles of the upper leg."
    },
    {
      name: "Pull Down",
      image: "/images/pulldown.jpg",  // Replace with the correct image path
      description: "The pull-down machine is used for upper body pulling exercises, primarily targeting the lats, back, and biceps. It's a great alternative to pull-ups."
    },
    {
      name: "Smith Machine",
      image: "/images/smith-machine.jpg",  // Replace with the correct image path
      description: "The Smith machine allows for safer weight training with a guided barbell. It's ideal for exercises like squats and presses when you need more stability."
    },
    {
      name: "Crossover Cables",
      image: "/images/crossover_cables.jpg",  // Replace with the correct image path
      description: "The crossover cables station enables a variety of exercises that target the chest, shoulders, and arms. It's versatile and ideal for functional strength training."
    },
    {
      name: "Cable Station",
      image: "/images/cable-station.jpg",  // Replace with the correct image path
      description: "The cable station allows for constant tension throughout the range of motion, making it perfect for isolating muscles. It’s used for a wide variety of exercises targeting different muscle groups."
    }
  ];