import { useForm } from '@inertiajs/react';
import { FormEventHandler, useRef, useState } from 'react';
import InputError from '@/components/InputError';
import PrimaryButton from '@/components/PrimaryButton';
import { User } from '@/types';

interface ProfilePictureUploadProps {
    user: User;
    className?: string;
}

export default function ProfilePictureUpload({ user, className = '' }: ProfilePictureUploadProps) {
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);

    const { data, setData, post, errors, processing } = useForm({
        profile_picture: null as File | null,
    });

    const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setData('profile_picture', file);

            // Create preview URL
            const reader = new FileReader();
            reader.onload = (e) => {
                setPreviewUrl(e.target?.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route('profile.picture.update'), {
            onSuccess: () => {
                setPreviewUrl(null);
                if (fileInputRef.current) {
                    fileInputRef.current.value = '';
                }
            },
        });
    };

    return (
        <section className={className}>
            <header>
                <h2 className="text-lg font-medium text-gray-900">
                    Profile Picture
                </h2>
                <p className="mt-1 text-sm text-gray-600">
                    Update your profile picture. Supported formats: JPG, PNG, GIF (max 2MB).
                </p>
            </header>

            <div className="mt-6 space-y-6">
                {/* Current/Preview Image */}
                <div className="flex items-center space-x-6">
                    <div className="shrink-0">
                        <img
                            className="h-20 w-20 object-cover rounded-full border-2 border-gray-300"
                            src={previewUrl || user.profile_picture_url}
                            alt="Profile preview"
                        />
                    </div>

                    <div>
                        <button
                            type="button"
                            onClick={() => fileInputRef.current?.click()}
                            className="rounded-md border border-gray-300 bg-white py-2 px-3 text-sm font-medium leading-4 text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >
                            Choose new picture
                        </button>
                        <input
                            ref={fileInputRef}
                            type="file"
                            accept="image/jpeg,image/png,image/gif"
                            onChange={handleFileSelect}
                            className="hidden"
                        />
                    </div>
                </div>

                <InputError message={errors.profile_picture} className="mt-2" />

                {data.profile_picture && (
                    <form onSubmit={submit} className="space-y-4">
                        <div className="flex items-center gap-4">
                            <PrimaryButton disabled={processing}>
                                {processing ? 'Uploading...' : 'Upload Picture'}
                            </PrimaryButton>

                            <button
                                type="button"
                                onClick={() => {
                                    setData('profile_picture', null);
                                    setPreviewUrl(null);
                                    if (fileInputRef.current) {
                                        fileInputRef.current.value = '';
                                    }
                                }}
                                className="text-sm text-gray-500 hover:text-gray-700"
                            >
                                Cancel
                            </button>
                        </div>
                    </form>
                )}
            </div>
        </section>
    );
}
