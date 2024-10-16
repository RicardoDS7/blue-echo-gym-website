
export const NAV_LINKS = [
    {section: "About Us", path: '#about-us'},
    {section: "Cardio", path: '#cardio'},
    {section: "Strength", path: '#strength'},
    {section: "Mobility", path: '#mobility'}
]

interface CardioEquipment {
    name: string;
    image: string;  // URL or path to the image
    description: string;
  }
  
  export const CardioEquipment: CardioEquipment[] = [
    {
      name: "Treadmill",
      image: "/images/cardio/treadmill.jpg",  // Replace with the correct image path
      description: "The treadmill allows you to walk, jog, or run indoors, offering customizable speeds and incline levels for a varied workout. It's perfect for improving cardiovascular endurance and burning calories."
    },
    {
      name: "Exercise Bike",
      image: "/images/cardio/exercise-bike.jpg",  // Replace with the correct image path
      description: "An exercise bike provides a low-impact cardio workout that's easy on the joints. It strengthens your legs and improves cardiovascular health while being gentle on the body."
    },
    {
      name: "Elliptical Trainer",
      image: "/images/cardio/elliptical.jpg",  // Replace with the correct image path
      description: "The elliptical trainer offers a full-body, low-impact workout that targets both the upper and lower body. It improves cardiovascular health while minimizing stress on the joints."
    },
    {
      name: "Rowing Machine",
      image: "/images/cardio/rowing-machine.jpg",  // Replace with the correct image path
      description: "A rowing machine provides a full-body workout that strengthens your legs, core, and arms while improving cardiovascular endurance. It's a great low-impact option for burning calories and building strength."
    },
    {
      name: "Stair Climber",
      image: "/images/cardio/stair-climber.jpg",  // Replace with the correct image path
      description: "The stair climber mimics the motion of climbing stairs, offering an intense workout that strengthens your legs and glutes while boosting cardiovascular fitness."
    },
    {
      name: "Spin Bike",
      image: "/images/cardio/spin-bike.jpg",  // Replace with the correct image path
      description: "The spin bike is ideal for high-intensity interval training and endurance rides. It's designed for more rigorous workouts that improve cardiovascular health and strengthen leg muscles."
    },
    {
      name: "Arc Trainer",
      image: "/images/cardio/arc-trainer.jpg",  // Replace with the correct image path
      description: "The Arc Trainer is a low-impact cardio machine that offers a combination of gliding, striding, and climbing motions, providing an effective workout for the legs and core while protecting the joints."
    },
    {
      name: "Recumbent Bike",
      image: "/images/cardio/recumbent-bike.jpg",  // Replace with the correct image path
      description: "The recumbent bike offers a seated cardio workout that's gentle on the back and joints. It's great for those looking for a low-impact way to improve cardiovascular health and leg strength."
    }
  ];
  