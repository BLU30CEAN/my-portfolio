const API_BASE_URL =
  process.env.REACT_APP_API_URL || "http://localhost:5000/api";

interface ApiResponse<T = any> {
  success: boolean;
  message?: string;
  data?: T;
}

class ApiClient {
  private baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<ApiResponse<T>> {
    try {
      const url = `${this.baseUrl}${endpoint}`;
      const response = await fetch(url, {
        headers: {
          "Content-Type": "application/json",
          ...options.headers,
        },
        ...options,
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "API 요청에 실패했습니다.");
      }

      return data;
    } catch (error) {
      console.error("API request failed:", error);
      throw error;
    }
  }

  // 문의 폼 제출
  async submitContact(contactData: {
    name: string;
    email: string;
    subject: string;
    message: string;
  }): Promise<ApiResponse> {
    return this.request("/contact", {
      method: "POST",
      body: JSON.stringify(contactData),
    });
  }

  // 게시글 목록 조회
  async getPosts(page: number = 1, limit: number = 10): Promise<ApiResponse> {
    return this.request(`/posts?page=${page}&limit=${limit}`);
  }

  // 게시글 상세 조회
  async getPost(id: string): Promise<ApiResponse> {
    return this.request(`/posts/${id}`);
  }

  // 게시글 작성
  async createPost(postData: {
    title: string;
    content: string;
    author: string;
  }): Promise<ApiResponse> {
    return this.request("/posts", {
      method: "POST",
      body: JSON.stringify(postData),
    });
  }

  // 관리자 - 문의 목록 조회
  async getContacts(): Promise<ApiResponse> {
    return this.request("/admin/contacts");
  }

  // 헬스 체크
  async healthCheck(): Promise<ApiResponse> {
    return this.request("/health");
  }
}

export const apiClient = new ApiClient(API_BASE_URL);
