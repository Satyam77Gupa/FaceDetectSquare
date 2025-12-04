import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-fitstreet',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './fitstreet.component.html',
  styleUrl: './fitstreet.component.css'
})
export class FitstreetComponent {
  pillars = [
    {
      title: 'Personal Fitness Training',
      emoji: '🏋️',
      gradient: 'from-orange-400 to-red-500',
      services: [
        'Weight loss & body recomposition',
        'Strength & conditioning programs',
        'Yoga & Pilates',
        'Sports-specific training',
        'Posture correction',
        'Senior citizen programs'
      ]
    },
    {
      title: 'Mental Wellness & Counseling',
      emoji: '🧠',
      gradient: 'from-purple-400 to-pink-500',
      services: [
        'Stress & burnout counseling',
        'Anxiety support',
        'Family & relationship guidance',
        'Self-esteem building',
        'Teen counseling',
        'Mindfulness & meditation'
      ]
    },
    {
      title: 'Nutrition & Diet Management',
      emoji: '🥗',
      gradient: 'from-green-400 to-emerald-500',
      services: [
        'Personalized diet plans',
        'PCOS/PCOD programs',
        'Diabetes & thyroid management',
        'Muscle gain nutrition',
        'Child & family nutrition',
        'Corporate wellness plans'
      ]
    }
  ];

  benefits = [
    {
      title: 'Complete In-Home Ecosystem',
      description: 'Fitness + Mental Health + Nutrition in one platform',
      icon: '✓'
    },
    {
      title: 'Verified & Certified Experts',
      description: 'Multi-stage verification for quality assurance',
      icon: '✓'
    },
    {
      title: 'Flexible Schedules',
      description: 'Early morning, evening, or weekend sessions',
      icon: '✓'
    },
    {
      title: 'Affordable Premium Services',
      description: 'Quality wellness for middle-income families',
      icon: '✓'
    }
  ];
}
