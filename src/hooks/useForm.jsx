import { useState } from 'react';

export const useForm = () => {
    // Estado del formulario
    const [form, setForm] = useState({});

    // Función para serializar los datos del formulario
    const serializeForm = (form) => {
        const formData = new FormData(form);
        const objetComplete = {};

        for (let [name, value] of formData) {
            objetComplete[name] = value;
        }

        return objetComplete;
    };

    // Función que se ejecuta al enviar el formulario
    const submited = (e) => {
        e.preventDefault();

        // Serializa los datos del formulario
        let curso = serializeForm(e.target);

        // Actualiza el estado del formulario
        setForm((prevForm) => {
            const updatedForm = { ...prevForm, ...curso };
            return updatedForm;
        });

        // Agrega una clase al elemento con la clase "code"
        document.querySelector(".code").classList.add("sumited");
    };

    // Función que se ejecuta al cambiar un campo del formulario
    const changed = ({ target }) => {
        const { name, value } = target;

        // Actualiza el estado del formulario
        setForm((prevForm) => {
            return {
                ...prevForm,
                [name]: value
            };
        });
    };

    // Devuelve el estado actual del formulario y las funciones para manejar eventos
    return {
        form,
        submited,
        changed
    };
};
