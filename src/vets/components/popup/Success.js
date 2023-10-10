import Swal from "sweetalert2"

export const success = () => {
    Swal.fire({
        title: '',
        text: "Operación completada exitosamente.",
        icon: 'success',
        width: 400,
        showCancelButton: false,
        confirmButtonColor: '#336CFB',
        confirmButtonText: 'OK',
    })

}