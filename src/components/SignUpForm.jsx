import React, { useState } from 'react';
import { Container, TextField, Select, MenuItem, Button, Typography, Box } from '@mui/material';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/SignupForm.css';

const skillCategories = ['Graphic Design', 'Web Development', 'Writing', 'Photography', 'Video Editing', 'Other'];

const SignUpForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        skillCategory: '',
        customSkill: '',
        portfolioLink: ''
    });
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);

    const validateForm = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = 'Name is required';
        if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        newErrors.email = 'Valid email is required';
        }
        if (!formData.skillCategory) newErrors.skillCategory = 'Skill category is required';
        if (formData.skillCategory === 'Other' && !formData.customSkill.trim()) {
        newErrors.customSkill = 'Please specify your skill';
        }
        if (!formData.portfolioLink || !/^https?:\/\/[^\s/$.?#].[^\s]*$/.test(formData.portfolioLink)) {
        newErrors.portfolioLink = 'Valid URL is required';
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
        toast.success('Form submitted successfully!', {
            position: 'top-right',
            autoClose: 2000,
            onClose: () => setSubmitted(true)
        });
        }
    };

    if (submitted) {
        return (
        <Container maxWidth="sm" sx={{ mt: 4, textAlign: 'center' }}>
            <Typography variant="h4" gutterBottom>
            Thank You!
            </Typography>
            <Typography variant="body1">
            Your sign-up request has been received. We'll get back to you soon.
            </Typography>
        </Container>
        );
    }

    return (
        <Container maxWidth="sm" sx={{ mt: 4 }}>
        <ToastContainer />
        <Typography variant="h4" gutterBottom>
            Gig Worker Sign-Up
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate>
            <TextField
            fullWidth
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            error={!!errors.name}
            helperText={errors.name}
            margin="normal"
            required
            />
            <TextField
            fullWidth
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            error={!!errors.email}
            helperText={errors.email}
            margin="normal"
            required
            />
            <Select
            fullWidth
            name="skillCategory"
            value={formData.skillCategory}
            onChange={handleChange}
            displayEmpty
            error={!!errors.skillCategory}
            sx={{ mt: 2, mb: 1 }}
            required
            >
            <MenuItem value="" disabled>
                Select Skill Category
            </MenuItem>
            {skillCategories.map((category) => (
                <MenuItem key={category} value={category}>
                {category}
                </MenuItem>
            ))}
            </Select>
            {errors.skillCategory && (
            <Typography color="error" variant="caption" display="block" sx={{ mb: 2 }}>
                {errors.skillCategory}
            </Typography>
            )}
            {formData.skillCategory === 'Other' && (
            <TextField
                fullWidth
                label="Specify Your Skill"
                name="customSkill"
                value={formData.customSkill}
                onChange={handleChange}
                error={!!errors.customSkill}
                helperText={errors.customSkill}
                margin="normal"
                required
            />
            )}
            <TextField
            fullWidth
            label="Portfolio Link"
            name="portfolioLink"
            type="url"
            value={formData.portfolioLink}
            onChange={handleChange}
            error={!!errors.portfolioLink}
            helperText={errors.portfolioLink}
            margin="normal"
            required
            />
            <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 3 }}
            >
            Sign Up
            </Button>
        </Box>
        </Container>
    );
};

export default SignUpForm;