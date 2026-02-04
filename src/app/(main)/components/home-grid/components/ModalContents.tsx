import { Box, SimpleGrid, Text, Title, Stack, Card } from "@mantine/core";
import { motion } from "motion/react";
import Image from "next/image";
import img1 from "../../../../../../public/Photos/image1.jpg";
import img2 from "../../../../../../public/Photos/image2.jpg";
import img3 from "../../../../../../public/Photos/image3.jpg";
import img4 from "../../../../../../public/Photos/image4.jpg";
import img5 from "../../../../../../public/Photos/image5.jpg";
import img6 from "../../../../../../public/Photos/image6.jpg";

const features = [
  {
    title: "Fast Payments",
    description: "Process transactions instantly across all payment methods",
    image: img1,
  },
  {
    title: "Global Support",
    description: "Accept payments from customers worldwide seamlessly",
    image: img2,
  },
  {
    title: "Analytics",
    description: "Real-time insights and comprehensive reporting dashboard",
    image: img3,
  },
  {
    title: "Security",
    description: "Enterprise-grade encryption and fraud protection",
    image: img4,
  },
  {
    title: "Integration",
    description: "Easy setup with your existing tech stack",
    image: img5,
  },
  {
    title: "Support",
    description: "24/7 dedicated support team at your service",
    image: img6,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6 },
  },
};

const ModalContents = () => {
  return (
    <Box p={{ base: 16, md: 32 }}>
      <Stack gap={32}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Box ta="center">
            <Title order={2} mb={8}>
              Why Choose Stripe
            </Title>
            <Text c="dimmed" size="lg">
              Powerful tools for modern payments
            </Text>
          </Box>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing="lg">
            {features.map((feature) => (
              <motion.div key={feature.title} variants={itemVariants}>
                <Card shadow="sm" padding="lg" radius="md" withBorder>
                  <Card.Section mb="sm" style={{ overflow: "hidden" }}>
                    <motion.div
                      variants={imageVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.3 }}
                    >
                      <Image
                        src={feature.image}
                        alt={feature.title}
                        width={300}
                        height={200}
                        style={{
                          width: "100%",
                          height: "200px",
                          objectFit: "cover",
                        }}
                      />
                    </motion.div>
                  </Card.Section>

                  <Title order={4} mb={8}>
                    {feature.title}
                  </Title>
                  <Text size="sm" c="dimmed">
                    {feature.description}
                  </Text>
                </Card>
              </motion.div>
            ))}
          </SimpleGrid>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <SimpleGrid cols={{ base: 2, sm: 4 }} spacing="xl">
            {[
              { label: "$500B+", desc: "Processed Annually" },
              { label: "195+", desc: "Countries" },
              { label: "120+", desc: "Currencies" },
              { label: "99.99%", desc: "Uptime" },
            ].map((stat) => (
              <motion.div
                key={stat.label}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <Box ta="center" py="md">
                  <Title order={3}>{stat.label}</Title>
                  <Text size="sm" c="dimmed">
                    {stat.desc}
                  </Text>
                </Box>
              </motion.div>
            ))}
          </SimpleGrid>
        </motion.div>
      </Stack>
    </Box>
  );
};

export default ModalContents;
