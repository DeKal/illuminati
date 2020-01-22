package com.dawn.jat.illuminati.post.advice;

import static org.junit.jupiter.api.Assertions.assertEquals;

import com.dawn.jat.illuminati.post.entity.PostSummaryEntity;
import java.util.Arrays;
import java.util.List;

import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;
import org.springframework.http.HttpStatus;

public class PostSuccessRespAdviceTest {
    private static PostSummaryEntity postSummaryEntity;

    /**
     * Initializing postEntity object.
     */
    @BeforeAll
    public static void init() {
        postSummaryEntity = new PostSummaryEntity("how-to-apply-agile-methodology",
                "How to apply Agile methodology", "Guide",
                "01/01/2020", new String[]{"Agile"}, "Phat Ho");
    }

    @Test
    void success_Response_returnHttpPostSummaryOk() {
        PostSuccessRespAdvice resp = new PostSuccessRespAdvice();

        List<PostSummaryEntity> mockPostSumEntities = Arrays.asList(postSummaryEntity);
        assertEquals(HttpStatus.OK,
                resp.successGetPost(mockPostSumEntities).getStatusCode());
    }
}
