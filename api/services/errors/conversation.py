from core.errors import BaseServiceError, ConversationNotExistsError

__all__ = ["ConversationNotExistsError"]


class LastConversationNotExistsError(BaseServiceError):
    pass


class ConversationCompletedError(Exception):
    pass


class ConversationVariableNotExistsError(BaseServiceError):
    pass


class ConversationVariableTypeMismatchError(BaseServiceError):
    pass
