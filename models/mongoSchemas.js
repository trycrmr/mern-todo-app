const mongoSchemas = [
  {
    name: "Todo",
    schema: {
      id: { type: String },
      title: { type: String },
      description: { type: String },
      createdAt: { type: String, default: Date.now },
      createdBy: { type: String },
      isCompleted: { type: Boolean },
    },
  },
];

export default mongoSchemas;
