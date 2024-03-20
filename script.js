function Car(marque,modele, annee, kilométrage, prix){
    this.marque = marque;
    this.modele = modele;
    this.annee = annee;
    this.kilotrage= kilometrage;
    this.prix = prix;
}

var cars = [];

function CreateAllCars()
{

cars.push(new Car('Audi','A4',2020,25000,35000));
cars.push(new Car( "BMW","X5", 2019, 30000, 45000));
cars.push(new Car( "Mercedes-Benz", "C-Class", 2021, 15000, 40000 ));
cars.push(new Car("Volkswagen", "Golf", 2018, 40000, 20000));
cars.push(new Car("Porsche", "911", 2022, 10000,80000));
cars.push(new Car("Audi", "Q7", 2017,60000,30000));
cars.push(new Car("BMW", "3 Series", 2020,20000, 35000));
cars.push(new Car( "Mercedes-Benz",  "E-Class",2019,35000, 45000));
cars.push(new Car( "Volkswagen",  "Passat",  2018,45000,25000));
cars.push(new Car( "Porsche", "Cayenne",  2021, 15000, 70000));   
}

function GetAllCars()
{
    return cars;
}

function ShowAllCars(){
var tableBody = document.getElementById("carTableBody");
tableBody.innerHTML = '';
cars.forEach(functions(car) {
    var row = tableBody.insertRow();
    row.innerHTML = '<td>${car.marque}</td><td>${car.modele}</td><td>${car.annee}</td><td>${car.kilometrage}</td><td>${car.prix}</td>';
});
}
function LoadData(){
    CreateAllCars();
    ShowAllCars();
}