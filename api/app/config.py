from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    model_config = SettingsConfigDict(
        env_file=".env", extra="ignore", populate_by_name=True
    )

    database_url: str = "postgresql+psycopg://portfolio:portfolio@localhost:5433/admin_studio"
    cors_origins: str = "http://localhost:3100,http://127.0.0.1:3100"
    admin_api_key: str = "dev-admin-key-change-me"

    @property
    def cors_origin_list(self) -> list[str]:
        return [o.strip() for o in self.cors_origins.split(",") if o.strip()]


settings = Settings()
