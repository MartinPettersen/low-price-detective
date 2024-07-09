
export type RootStackParamList = {
    Home: undefined;
    Scan: undefined;
    Options: { product: any };
    Map: { startLat: string, startLng: string, endLat: string, endLng: string, title: string, description: string }
};

export type Category = {
    depth: number;
    id: number;
    name: string;
};

export type PriceHistory = {
    date: string;
    price: number;
};

export type CurrentPrice = {
    date: string;
    price: number;
    unit_price?: number;
};

export type Store = {
    code: string;
    logo: string;
    name: string;
    url: string;
};

export type Kassalapp = {
    opengraph: string;
    url: string;
};

export type Product = {
    brand: string;
    category: Category[];
    created_at: string;
    current_price: CurrentPrice;
    description?: string | null;
    id: number;
    image: string;
    ingredients: string;
    kassalapp: Kassalapp;
    name: string;
    price_history: PriceHistory[];
    store: Store;
    updated_at: string;
    url: string;
    vendor: string;
    weight?: number | null;
    weight_unit?: string | null;
};
