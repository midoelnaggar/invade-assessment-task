interface IUniversity {
    name: string;
    "state-province": string | null;
    domains: string[];
    web_pages: string[];
    alpha_two_code: string;
    country: string;
}

interface IUniversitiesState {
    loading: boolean;
    universities: IUniversity[]
    filteredUniversities: IUniversity[]
}