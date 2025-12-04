import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {
  services = [
    {
      icon: '🏃‍♀️',
      title: 'One-on-One Training',
      description: 'Personalized 1-hour sessions with certified trainers',
      color: 'from-blue-50 to-blue-100'
    },
    {
      icon: '👨‍👩‍👧‍👦',
      title: 'Family Wellness',
      description: 'Group sessions for entire families with customized plans',
      color: 'from-green-50 to-green-100'
    },
    {
      icon: '🥗',
      title: 'Nutrition Consultation',
      description: 'Expert nutritionist guidance for personalized diet plans',
      color: 'from-purple-50 to-purple-100'
    },
    {
      icon: '🧘‍♀️',
      title: 'Mental Health Support',
      description: 'Confidential counseling and wellness coaching',
      color: 'from-pink-50 to-pink-100'
    },
    {
      icon: '📊',
      title: 'Progress Tracking',
      description: 'Weekly monitoring & measurable results with analytics',
      color: 'from-orange-50 to-orange-100'
    },
    {
      icon: '🎖️',
      title: 'Certification Programs',
      description: 'Professional training certifications for health coaches',
      color: 'from-teal-50 to-teal-100'
    },
    {
      icon: '💼',
      title: 'Corporate Wellness',
      description: 'Tailored programs for corporate employees and teams',
      color: 'from-indigo-50 to-indigo-100'
    },
    {
      icon: '🏥',
      title: 'Rehabilitation Programs',
      description: 'Post-injury recovery and physiotherapy services',
      color: 'from-red-50 to-red-100'
    }
  ];

  pricing = [
    {
      name: 'Basic',
      price: '₹4,999',
      period: '/month',
      description: 'Perfect for beginners',
      features: [
        '4 sessions per month',
        'Basic fitness guidance',
        'Nutrition tips',
        'Email support'
      ],
      popular: false
    },
    {
      name: 'Pro',
      price: '₹9,999',
      period: '/month',
      description: 'Recommended for serious progress',
      features: [
        '8 sessions per month',
        'Personalized training plan',
        'Nutrition consultation',
        'Progress tracking',
        'Priority support'
      ],
      popular: true
    },
    {
      name: 'Premium',
      price: '₹19,999',
      period: '/month',
      description: 'Complete wellness transformation',
      features: [
        'Unlimited sessions',
        '1-on-1 personalized coaching',
        'Mental wellness support',
        'Nutrition & meal planning',
        '24/7 dedicated support',
        'Family included'
      ],
      popular: false
    }
  ];
}
