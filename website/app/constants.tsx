
export const NAV_LINKS = [
    {section: "CARDIO", path: '#cardio'},
    {section: "STRENGTH", path: '#strength'},
    {section: "MOBILITY", path: '#mobility'}
]

interface CardioEquipmentProps {
    name: string;
    image: string;  // URL or path to the image
    description: string;
  }
  
  export const CardioEquipment: CardioEquipmentProps[] = [
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
      description: "The spin bike is ideal for high-intensity interval training and endurance rides. It's designed for more rigorous workouts that improve cardiovascular health and strengthen leg muscles."
    }
  ];
  