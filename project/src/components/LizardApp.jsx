import { useState } from 'react'
import { Card, Button, Row, Col, Typography, Space, Tag } from 'antd'

const { Title, Paragraph, Text } = Typography

const LizardApp = () => {
  const [selectedLizard, setSelectedLizard] = useState(null)

  const lizards = [
    {
      id: 1,
      name: "Bearded Dragon",
      scientificName: "Pogona vitticeps",
      habitat: "Australian deserts and woodlands",
      size: "18-24 inches",
      lifespan: "10-15 years",
      diet: "Omnivore",
      facts: [
        "Can change color to regulate body temperature",
        "Have a 'third eye' called a parietal eye",
        "Males wave their arms to show submission"
      ],
      emoji: "🦎"
    },
    {
      id: 2,
      name: "Gecko",
      scientificName: "Gekkonidae",
      habitat: "Tropical and subtropical regions worldwide",
      size: "0.6-24 inches",
      lifespan: "5-20 years",
      diet: "Insectivore",
      facts: [
        "Can walk on walls and ceilings",
        "Most species are nocturnal",
        "Some can detach and regrow their tails"
      ],
      emoji: "🦎"
    },
    {
      id: 3,
      name: "Iguana",
      scientificName: "Iguana iguana",
      habitat: "Central and South American rainforests",
      size: "4-6 feet",
      lifespan: "15-20 years",
      diet: "Herbivore",
      facts: [
        "Excellent swimmers and can hold breath for 30 minutes",
        "Have a dewlap that helps regulate temperature",
        "Can grow up to 6 feet long including tail"
      ],
      emoji: "🦎"
    },
    {
      id: 4,
      name: "Chameleon",
      scientificName: "Chamaeleonidae",
      habitat: "Madagascar and Africa",
      size: "1-27 inches",
      lifespan: "3-10 years",
      diet: "Insectivore",
      facts: [
        "Eyes can move independently",
        "Tongue can be twice their body length",
        "Change color for communication and temperature regulation"
      ],
      emoji: "🦎"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 p-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <Title level={1} className="text-green-800 mb-2">
            🦎 Amazing Lizards 🦎
          </Title>
          <Paragraph className="text-lg text-green-700">
            Discover the fascinating world of lizards and their incredible adaptations
          </Paragraph>
        </div>

        <Row gutter={[16, 16]}>
          {lizards.map((lizard) => (
            <Col key={lizard.id} xs={24} sm={12} lg={6}>
              <Card
                hoverable
                className="h-full shadow-lg hover:shadow-xl transition-shadow duration-300"
                cover={
                  <div className="bg-gradient-to-r from-green-400 to-emerald-500 h-32 flex items-center justify-center">
                    <span className="text-6xl">{lizard.emoji}</span>
                  </div>
                }
                onClick={() => setSelectedLizard(lizard)}
              >
                <Card.Meta
                  title={<Text className="text-green-800">{lizard.name}</Text>}
                  description={
                    <div>
                      <Text italic className="text-green-600 block mb-2">
                        {lizard.scientificName}
                      </Text>
                      <Tag color="green">Size: {lizard.size}</Tag>
                      <Tag color="blue" className="mt-1">Lifespan: {lizard.lifespan}</Tag>
                    </div>
                  }
                />
              </Card>
            </Col>
          ))}
        </Row>

        {selectedLizard && (
          <Card 
            className="mt-8 shadow-xl"
            title={
              <div className="flex items-center gap-3">
                <span className="text-2xl">{selectedLizard.emoji}</span>
                <Title level={3} className="mb-0 text-green-800">
                  {selectedLizard.name}
                </Title>
              </div>
            }
            extra={
              <Button 
                onClick={() => setSelectedLizard(null)}
                type="text"
                className="text-green-600 hover:text-green-800"
              >
                ✕ Close
              </Button>
            }
          >
            <Row gutter={[24, 24]}>
              <Col xs={24} md={12}>
                <Space direction="vertical" size="middle" className="w-full">
                  <div>
                    <Text strong className="text-green-800">Scientific Name:</Text>
                    <br />
                    <Text italic>{selectedLizard.scientificName}</Text>
                  </div>
                  <div>
                    <Text strong className="text-green-800">Habitat:</Text>
                    <br />
                    <Text>{selectedLizard.habitat}</Text>
                  </div>
                  <div>
                    <Text strong className="text-green-800">Diet:</Text>
                    <br />
                    <Tag color={selectedLizard.diet === 'Herbivore' ? 'green' : selectedLizard.diet === 'Carnivore' ? 'red' : 'orange'}>
                      {selectedLizard.diet}
                    </Tag>
                  </div>
                </Space>
              </Col>
              <Col xs={24} md={12}>
                <div>
                  <Text strong className="text-green-800">Fun Facts:</Text>
                  <ul className="mt-2 space-y-1">
                    {selectedLizard.facts.map((fact, index) => (
                      <li key={index} className="text-gray-700">
                        • {fact}
                      </li>
                    ))}
                  </ul>
                </div>
              </Col>
            </Row>
          </Card>
        )}

        <div className="text-center mt-12">
          <Card className="bg-green-50 border-green-200">
            <Title level={4} className="text-green-800 mb-3">
              Did You Know?
            </Title>
            <Paragraph className="text-green-700 text-lg">
              There are over 6,000 species of lizards worldwide, making them one of the most diverse groups of reptiles! 
              They've been around for more than 200 million years and have adapted to almost every environment on Earth.
            </Paragraph>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default LizardApp