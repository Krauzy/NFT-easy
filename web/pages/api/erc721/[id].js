const metadata = {
  1: {
    attributes: [
      {
        trait_types: "Color",
        value: "pale yellow"
      },
      {
        trait_types: "State",
        value: "lying down"
      }
    ],
    description: "A pale yellow cat lying down",
    image: "https://i.imgur.com/jsrG4GL.jpeg",
    name: "Pale yellow cat"
  },
  2: {
    attributes: [
      {
        trait_types: "Color",
        value: "dark grey"
      },
      {
        trait_types: "State",
        value: "seated"
      }
    ],
    description: "A dark grey cat sitting",
    image: "https://i.imgur.com/ZFjdBwP.jpg",
    name: "Dark grey cat"
  }
}

export default function handler(req, res) {
  res.status(200).json(metadata[req.query.id] || {});
}