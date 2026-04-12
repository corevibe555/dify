from core.errors import AppModelConfigBrokenError, BaseServiceError

__all__ = ["AppModelConfigBrokenError", "ProviderNotFoundError"]


class ProviderNotFoundError(BaseServiceError):
    pass
