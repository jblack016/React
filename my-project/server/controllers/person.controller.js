const { Person } = require("../models/person.model");

module.exports.index = (request, response) => {
    response.json({
        message: "Hello World"
    })
}

// Create

module.exports.createPerson = (request, response) => {
    const {firstName, lastName} = request.body;
    Person.create({
        firstName,
        lastName
    })
    .then(person => response.json(person))
    .catch(err => response.json(err))
}

// Get All

module.exports.getAllPeople = (request, response) => {
    Person.find({})
    .then(persons => response.json(persons))
    .catch(err => response.json(err))
}

// Get One

module.exports.getOnePerson = (request, response) => {
    Person.findOne({_id:request.params.id})
    .then(person => response.json(person))
    .catch(err => response.json(err))
}

// Update

module.exports.updatePerson = (request, response) => {
    Person.findOneAndUpdate({_id: request.params.id}, request.body, {new:true})
    .then(updatePerson => response.json(updatedPerson))
    .catch(err => response.json(err))
}

// Delete

module.exports.deletePerson = (request, response) => {
    Person.deleteOne({_id: request.params.id})
    .then(deleteConfirmation => response.json(deleteConfirmation))
    .catch(err => response.json(err))
}