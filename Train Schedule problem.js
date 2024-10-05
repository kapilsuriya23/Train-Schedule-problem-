class TrainSchedule {
    constructor() {
        this.trains = [];
    }

    addTrain(trainNumber, arrivalTime, departureTime) {
        const train = {
            trainNumber,
            arrivalTime,
            departureTime,
        };
        this.trains.push(train);
        console.log(`Train ${trainNumber} added: Arrival: ${arrivalTime}, Departure: ${departureTime}`);
    }

    viewSchedule() {
        if (this.trains.length === 0) {
            console.log("No trains in the schedule.");
            return;
        }
        
        console.log("Current Train Schedule:");
        this.trains.forEach(train => {
            console.log(`Train Number: ${train.trainNumber}, Arrival: ${train.arrivalTime}, Departure: ${train.departureTime}`);
        });
    }
}

const schedule = new TrainSchedule();

schedule.addTrain("A120", "10:00 AM", "10:30 AM");
schedule.addTrain("B304", "10:42 AM", "11:45 AM");
schedule.addTrain("C503", "12:30 PM", "1:00 PM");

schedule.viewSchedule();
