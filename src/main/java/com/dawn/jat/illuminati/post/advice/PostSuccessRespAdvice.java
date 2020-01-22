package com.dawn.jat.illuminati.post.advice;

import com.dawn.jat.illuminati.post.response.SuccessResponse;
import java.util.List;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ResponseBody;

@ControllerAdvice
public class PostSuccessRespAdvice {
    /**
     * Success Response when the query Post Available.
     */
    @ResponseBody
    public ResponseEntity<Object> successGetPost(List<?> allPost) {
        SuccessResponse resp = new SuccessResponse();
        resp.setData(allPost);
        resp.setSuccess(true);
        return new ResponseEntity<>(resp, HttpStatus.OK);
    }
}
