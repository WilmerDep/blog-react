import { useState } from "react";

export const useForm = () => {
    const [form, setForm] = useState(objetInit);
    const serializeForm = (form);

        const formData = new FormData(form);

        const objetComplete = {};

        for(let [name, value] of formData){
            objetComplete[name] = value;
        }
    return objetComplete;

    const submited = (e) =>{
        e.preventDefault();

        let curso = serializeForm(e.target);

        setForm(curso);

        document.querySelector(".code").classList.add("sumited");
    }

    const changed = ({target}) =>{
        const {name, value} = target;

        setForm({
            ...form,
            [name]: value
        });
    }

    return {
        form,
        submited,
        changed
    }
}
