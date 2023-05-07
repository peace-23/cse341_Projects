module.exports = (mongoose) => {
    const Course = mongoose.model(
        'courses',
        mongoose.Schema(
            {
                courseCode: String,
                courseName: String,
                creditHours: Number,
                instructor: String,
                schedule: String,
                location: String,
                department: String
            },
            { timestamps: true }
        )
    );

    return Course;
};
