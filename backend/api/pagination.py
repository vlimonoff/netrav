from rest_framework.pagination import PageNumberPagination
from rest_framework.response import Response


class CustomPagination(PageNumberPagination):
    page_size_query_param = 'rowsPerPage'

    def get_paginated_response(self, data):
        return Response({
            'data': data,
            'size': self.page.paginator.count,
        })

