const Cliente = require('../models/clienteModel');

exports.getAllClientes = (req, res) => {
  Cliente.getAll((err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
};

exports.getClienteById = (req, res) => {
  Cliente.getById(req.params.id, (err, result) => {
    if (err) return res.status(500).send(err);
    if (result.length === 0) return res.status(404).send({ message: 'Cliente no encontrado' });
    res.json(result[0]);
  });
};

exports.createCliente = (req, res) => {
  Cliente.create(req.body, (err, result) => {
    if (err) return res.status(500).send(err);
    res.status(201).send({ id: result.insertId, ...req.body });
  });
};

exports.updateCliente = (req, res) => {
  Cliente.update(req.params.id, req.body, (err) => {
    if (err) return res.status(500).send(err);
    res.send({ message: 'Cliente actualizado' });
  });
};

exports.deleteCliente = (req, res) => {
  Cliente.delete(req.params.id, (err) => {
    if (err) return res.status(500).send(err);
    res.send({ message: 'Cliente eliminado' });
  });
};