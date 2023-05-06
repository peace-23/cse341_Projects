module.exports = (mongoose) => {
  const Student = mongoose.model(
    'students',
    mongoose.Schema(
      {
        firstName: String,
        lastName: String,
        sex: String,
        dob: Date,
        email: String,
        classification: String,
        track: String,
        major: String,
        enrolledDate: Date,
      },
      { timestamps: true }
    )
  );

  return Student;
};
