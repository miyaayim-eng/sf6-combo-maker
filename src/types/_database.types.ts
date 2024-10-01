export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type Database = {
  public: {
    Tables: {
      categories: {
        Row: {
          display: string | null;
          id: number;
          name: string | null;
        };
        Insert: {
          display?: string | null;
          id?: number;
          name?: string | null;
        };
        Update: {
          display?: string | null;
          id?: number;
          name?: string | null;
        };
        Relationships: [];
      };
      characters: {
        Row: {
          display: string | null;
          display_en: string | null;
          id: number;
          image: string | null;
          name: string | null;
        };
        Insert: {
          display?: string | null;
          display_en?: string | null;
          id?: number;
          image?: string | null;
          name?: string | null;
        };
        Update: {
          display?: string | null;
          display_en?: string | null;
          id?: number;
          image?: string | null;
          name?: string | null;
        };
        Relationships: [];
      };
      common_moves: {
        Row: {
          command: number[] | null;
          command_modern: number[] | null;
          display_abbreviation: string | null;
          display_normal: string | null;
          id: number;
          name: string | null;
        };
        Insert: {
          command?: number[] | null;
          command_modern?: number[] | null;
          display_abbreviation?: string | null;
          display_normal?: string | null;
          id?: number;
          name?: string | null;
        };
        Update: {
          command?: number[] | null;
          command_modern?: number[] | null;
          display_abbreviation?: string | null;
          display_normal?: string | null;
          id?: number;
          name?: string | null;
        };
        Relationships: [];
      };
      inputs: {
        Row: {
          display_arrow: string | null;
          display_common: string | null;
          display_number: string | null;
          id: number;
          name: string | null;
        };
        Insert: {
          display_arrow?: string | null;
          display_common?: string | null;
          display_number?: string | null;
          id?: number;
          name?: string | null;
        };
        Update: {
          display_arrow?: string | null;
          display_common?: string | null;
          display_number?: string | null;
          id?: number;
          name?: string | null;
        };
        Relationships: [];
      };
      normal_moves: {
        Row: {
          command: number[] | null;
          command_modern: number[] | null;
          comment_after: string | null;
          comment_before: string | null;
          display_arrow: string | null;
          display_normal: string | null;
          display_normal_abbreviation: string | null;
          display_normal_en: string | null;
          display_number_en: string | null;
          display_number_ja: string | null;
          id: number;
          name: string | null;
        };
        Insert: {
          command?: number[] | null;
          command_modern?: number[] | null;
          comment_after?: string | null;
          comment_before?: string | null;
          display_arrow?: string | null;
          display_normal?: string | null;
          display_normal_abbreviation?: string | null;
          display_normal_en?: string | null;
          display_number_en?: string | null;
          display_number_ja?: string | null;
          id?: number;
          name?: string | null;
        };
        Update: {
          command?: number[] | null;
          command_modern?: number[] | null;
          comment_after?: string | null;
          comment_before?: string | null;
          display_arrow?: string | null;
          display_normal?: string | null;
          display_normal_abbreviation?: string | null;
          display_normal_en?: string | null;
          display_number_en?: string | null;
          display_number_ja?: string | null;
          id?: number;
          name?: string | null;
        };
        Relationships: [];
      };
      recipes: {
        Row: {
          category: string | null;
          character_name: string | null;
          combo: Json[] | null;
          created_at: string;
          description: string | null;
          id: number;
          is_public: boolean | null;
          overdrive: number | null;
          password: number | null;
          position: string | null;
          super_arts: number | null;
          tags: string[] | null;
          title: string | null;
          total_damage: number | null;
          updated_at: string;
          user_id: string | null;
        };
        Insert: {
          category?: string | null;
          character_name?: string | null;
          combo?: Json[] | null;
          created_at?: string;
          description?: string | null;
          id?: number;
          is_public?: boolean | null;
          overdrive?: number | null;
          password?: number | null;
          position?: string | null;
          super_arts?: number | null;
          tags?: string[] | null;
          title?: string | null;
          total_damage?: number | null;
          updated_at?: string;
          user_id?: string | null;
        };
        Update: {
          category?: string | null;
          character_name?: string | null;
          combo?: Json[] | null;
          created_at?: string;
          description?: string | null;
          id?: number;
          is_public?: boolean | null;
          overdrive?: number | null;
          password?: number | null;
          position?: string | null;
          super_arts?: number | null;
          tags?: string[] | null;
          title?: string | null;
          total_damage?: number | null;
          updated_at?: string;
          user_id?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "recipes_character_name_fkey";
            columns: ["character_name"];
            isOneToOne: false;
            referencedRelation: "characters";
            referencedColumns: ["name"];
          },
          {
            foreignKeyName: "recipes_user_id_fkey";
            columns: ["user_id"];
            isOneToOne: false;
            referencedRelation: "users";
            referencedColumns: ["id"];
          }
        ];
      };
      special_moves: {
        Row: {
          character_name: string | null;
          command: number[] | null;
          comment_after: string | null;
          comment_before: string | null;
          display_normal: string | null;
          id: number;
          name: string | null;
        };
        Insert: {
          character_name?: string | null;
          command?: number[] | null;
          comment_after?: string | null;
          comment_before?: string | null;
          display_normal?: string | null;
          id?: number;
          name?: string | null;
        };
        Update: {
          character_name?: string | null;
          command?: number[] | null;
          comment_after?: string | null;
          comment_before?: string | null;
          display_normal?: string | null;
          id?: number;
          name?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "special_moves_character_name_fkey";
            columns: ["character_name"];
            isOneToOne: false;
            referencedRelation: "characters";
            referencedColumns: ["name"];
          }
        ];
      };
      super_arts: {
        Row: {
          character_name: string | null;
          command: number[] | null;
          comment_after: string | null;
          comment_before: string | null;
          display_normal: string | null;
          id: number;
          name: string | null;
        };
        Insert: {
          character_name?: string | null;
          command?: number[] | null;
          comment_after?: string | null;
          comment_before?: string | null;
          display_normal?: string | null;
          id?: number;
          name?: string | null;
        };
        Update: {
          character_name?: string | null;
          command?: number[] | null;
          comment_after?: string | null;
          comment_before?: string | null;
          display_normal?: string | null;
          id?: number;
          name?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "super_arts_character_name_fkey";
            columns: ["character_name"];
            isOneToOne: false;
            referencedRelation: "characters";
            referencedColumns: ["name"];
          }
        ];
      };
      tags: {
        Row: {
          display: string | null;
          id: number;
          name: string | null;
        };
        Insert: {
          display?: string | null;
          id?: number;
          name?: string | null;
        };
        Update: {
          display?: string | null;
          id?: number;
          name?: string | null;
        };
        Relationships: [];
      };
      unique_attacks: {
        Row: {
          character_name: string | null;
          command: number[] | null;
          display_normal: string | null;
          id: number;
          name: string | null;
        };
        Insert: {
          character_name?: string | null;
          command?: number[] | null;
          display_normal?: string | null;
          id?: number;
          name?: string | null;
        };
        Update: {
          character_name?: string | null;
          command?: number[] | null;
          display_normal?: string | null;
          id?: number;
          name?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "unique_attacks_character_name_fkey";
            columns: ["character_name"];
            isOneToOne: false;
            referencedRelation: "characters";
            referencedColumns: ["name"];
          }
        ];
      };
      users: {
        Row: {
          created_at: string;
          display_name: string | null;
          email: string | null;
          id: number;
          password_hash: string | null;
          updated_at: string;
          user_id: string | null;
          username: string | null;
        };
        Insert: {
          created_at?: string;
          display_name?: string | null;
          email?: string | null;
          id?: number;
          password_hash?: string | null;
          updated_at?: string;
          user_id?: string | null;
          username?: string | null;
        };
        Update: {
          created_at?: string;
          display_name?: string | null;
          email?: string | null;
          id?: number;
          password_hash?: string | null;
          updated_at?: string;
          user_id?: string | null;
          username?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "users_user_id_fkey";
            columns: ["user_id"];
            isOneToOne: false;
            referencedRelation: "users";
            referencedColumns: ["id"];
          }
        ];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
};

type PublicSchema = Database[Extract<keyof Database, "public">];

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R;
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
      PublicSchema["Views"])
  ? (PublicSchema["Tables"] &
      PublicSchema["Views"])[PublicTableNameOrOptions] extends {
      Row: infer R;
    }
    ? R
    : never
  : never;

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I;
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
  ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
      Insert: infer I;
    }
    ? I
    : never
  : never;

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U;
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
  ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
      Update: infer U;
    }
    ? U
    : never
  : never;

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
  ? PublicSchema["Enums"][PublicEnumNameOrOptions]
  : never;
