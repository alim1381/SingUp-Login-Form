
export const Validation = data => {
    const errors =  {}

    if (!data.name.trim()) {
        errors.name = "Please Enter a Name";
    } else if (data.name) {
        delete errors.name;
    }

    if (!data.email) {
        errors.email = "Please Enter a Email";
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
        errors.email = "Email is invalid"
    } else {
        delete errors.email
    }

    if (!data.password) {
        errors.password = "Please Enter a Password";
    } else if (data.password.length < 6) {
        errors.password = "Password is Short"
    } else {
        delete errors.password
    }

    if (!data.confirmPassword) {
        errors.confirmPassword = "Please Confirm Password";
    } else if (data.confirmPassword !== data.password) {
        errors.confirmPassword = "Passwords do not Mach"
    } else {
        delete errors.confirmPassword
    }
    if (!data.checkbox) {
        errors.checkbox = "Please Accept the rules";
    } else {
        delete errors.checkbox
    }

    return errors;
}