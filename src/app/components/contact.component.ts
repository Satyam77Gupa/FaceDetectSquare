import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  name = signal('');
  email = signal('');
  phone = signal('');
  service = signal('');
  message = signal('');
  successMessage = signal('');

  contactInfo = [
    {
      icon: '📍',
      title: 'Location',
      details: ['123 Tech Park, Bangalore', 'Karnataka, India - 560001']
    },
    {
      icon: '📱',
      title: 'Phone',
      details: ['+91 96XXX XXXXX', 'Mon - Fri: 9AM - 6PM IST']
    },
    {
      icon: '✉️',
      title: 'Email',
      details: ['hello@fitstreet.com', 'support@fitstreet.com']
    },
    {
      icon: '🕐',
      title: 'Working Hours',
      details: ['9:00 AM - 6:00 PM', 'Monday to Friday']
    }
  ];

  services = [
    'Select a service',
    'Fitness Training',
    'Mental Wellness',
    'Nutrition Counseling',
    'Corporate Wellness',
    'Other'
  ];

  submitForm() {
    if (!this.email().includes('@') || !this.name() || !this.message()) {
      this.successMessage.set('Please fill in all required fields correctly.');
      setTimeout(() => this.successMessage.set(''), 5000);
      return;
    }

    console.log('Form submitted:', {
      name: this.name(),
      email: this.email(),
      phone: this.phone(),
      service: this.service(),
      message: this.message()
    });

    this.successMessage.set('✓ Thank you! We\'ll get back to you soon.');
    
    // Reset form
    this.name.set('');
    this.email.set('');
    this.phone.set('');
    this.service.set('');
    this.message.set('');

    // Clear success message after 5 seconds
    setTimeout(() => {
      this.successMessage.set('');
    }, 5000);
  }
}
