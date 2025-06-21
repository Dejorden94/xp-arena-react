export interface User {
    id: number;
    name: string;
    email: string;
    email_verified_at?: string | null;
    experience: number;
    level: number;
    created_at?: string;
    updated_at?: string;
    avatar?: string;
    role?: string;
}

export interface AuthUser extends User {
    permissions?: string[];
    last_login?: string;
}

export type PageProps<
    T extends Record<string, unknown> = Record<string, unknown>,
> = T & {
    auth: {
        user: User;
    };
};
