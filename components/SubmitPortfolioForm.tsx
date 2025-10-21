import React, { useState } from 'react';
import { Portfolio } from '../types';
import { TECH_STACKS } from '../constants';

interface SubmitPortfolioFormProps {
  onSubmit: (portfolio: Omit<Portfolio, 'id' | 'likes'>) => void;
}

export const SubmitPortfolioForm: React.FC<SubmitPortfolioFormProps> = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [bio, setBio] = useState('');
  const [techStack, setTechStack] = useState<string[]>([]);
  const [githubUrl, setGithubUrl] = useState('');
  const [liveUrl, setLiveUrl] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [country, setCountry] = useState('');
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validate = (): boolean => {
    const newErrors: { [key: string]: string } = {};
    const urlRegex = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/;

    if (!name.trim()) newErrors.name = "Full Name is required.";
    if (!bio.trim()) newErrors.bio = "Bio is required.";
    if (!country.trim()) newErrors.country = "Country is required.";
    if (techStack.length === 0) newErrors.techStack = "Select at least one technology.";
    
    if (!githubUrl.trim()) {
      newErrors.githubUrl = "GitHub URL is required.";
    } else if (!urlRegex.test(githubUrl)) {
      newErrors.githubUrl = "Please enter a valid URL.";
    }

    if (!liveUrl.trim()) {
      newErrors.liveUrl = "Live Website URL is required.";
    } else if (!urlRegex.test(liveUrl)) {
      newErrors.liveUrl = "Please enter a valid URL.";
    }

    if (!imageUrl.trim()) {
      newErrors.imageUrl = "Image Preview URL is required.";
    } else if (!urlRegex.test(imageUrl)) {
      newErrors.imageUrl = "Please enter a valid URL for the image.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      onSubmit({ name, bio, techStack, githubUrl, liveUrl, imageUrl, country });
    }
  };
  
  const handleTechStackChange = (tech: string) => {
    setTechStack(prev =>
      prev.includes(tech) ? prev.filter(t => t !== tech) : [...prev, tech]
    );
  };

  const inputClass = "w-full px-3 py-2 text-gray-900 bg-white dark:bg-gray-700 dark:text-white border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500";
  const labelClass = "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1";

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className={labelClass}>Full Name <span className="text-red-500">*</span></label>
        <input type="text" value={name} onChange={e => setName(e.target.value)} className={inputClass} />
        {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
      </div>
      <div>
        <label className={labelClass}>Bio / Tech Stack <span className="text-red-500">*</span></label>
        <input type="text" value={bio} onChange={e => setBio(e.target.value)} className={inputClass} />
        {errors.bio && <p className="text-red-500 text-xs mt-1">{errors.bio}</p>}
      </div>
       <div>
        <label className={labelClass}>Country <span className="text-red-500">*</span></label>
        <input type="text" value={country} onChange={e => setCountry(e.target.value)} className={inputClass} />
        {errors.country && <p className="text-red-500 text-xs mt-1">{errors.country}</p>}
      </div>
      <div>
        <label className={labelClass}>Technologies <span className="text-red-500">*</span></label>
        <div className="flex flex-wrap gap-2 p-2 border border-gray-300 dark:border-gray-600 rounded-md">
            {TECH_STACKS.map(tech => (
                <button
                type="button"
                key={tech}
                onClick={() => handleTechStackChange(tech)}
                className={`px-2 py-1 text-xs font-medium rounded-full transition-colors duration-200 ${
                    techStack.includes(tech)
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-500'
                }`}
                >
                {tech}
                </button>
            ))}
        </div>
        {errors.techStack && <p className="text-red-500 text-xs mt-1">{errors.techStack}</p>}
      </div>
      <div>
        <label className={labelClass}>GitHub URL <span className="text-red-500">*</span></label>
        <input type="url" value={githubUrl} onChange={e => setGithubUrl(e.target.value)} className={inputClass} />
        {errors.githubUrl && <p className="text-red-500 text-xs mt-1">{errors.githubUrl}</p>}
      </div>
      <div>
        <label className={labelClass}>Live Website URL <span className="text-red-500">*</span></label>
        <input type="url" value={liveUrl} onChange={e => setLiveUrl(e.target.value)} className={inputClass} />
        {errors.liveUrl && <p className="text-red-500 text-xs mt-1">{errors.liveUrl}</p>}
      </div>
      <div>
        <label className={labelClass}>Image Preview URL <span className="text-red-500">*</span></label>
        <input type="url" value={imageUrl} onChange={e => setImageUrl(e.target.value)} className={inputClass} placeholder="https://picsum.photos/600/400" />
        {errors.imageUrl && <p className="text-red-500 text-xs mt-1">{errors.imageUrl}</p>}
      </div>
      <button type="submit" className="w-full py-2 px-4 bg-primary-600 text-white font-semibold rounded-md hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 dark:focus:ring-offset-gray-800">
        Submit
      </button>
    </form>
  );
};
